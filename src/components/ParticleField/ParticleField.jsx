import React, { useEffect, useRef } from 'react';

const WORD = ['ROUNAK KHANAM'];
const WORD_STACKED = ['ROUNAK', 'KHANAM'];
const GOLDEN_ANGLE = 2.399963;

const COLORS = {
  particle: '#8f9475',
  text: '#d9d7bd',
  accent: '#d6d28c',
  glow: 'rgba(214, 210, 140, 0.3)',
  line: 'rgba(236, 235, 220, 0.16)'
};

// Rasterise the lines off-screen and return the filled pixel positions (relative to centre)
function sampleWord(lines, width, height, target, fontFamily) {
  const w = Math.max(64, Math.floor(width));
  const h = Math.max(32, Math.floor(height));
  const off = document.createElement('canvas');
  off.width = w;
  off.height = h;
  const ctx = off.getContext('2d', { willReadFrequently: true });
  if (!ctx) return [];

  ctx.font = `800 100px ${fontFamily}`;
  ctx.letterSpacing = '4px';
  const widest = Math.max(...lines.map((l) => ctx.measureText(l).width));
  const lineH = h / lines.length;
  const fontSize = Math.max(12, Math.min((100 * 0.94 * w) / widest, lineH * 0.82));
  ctx.font = `800 ${fontSize}px ${fontFamily}`;
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  lines.forEach((line, i) => ctx.fillText(line, w / 2, lineH * (i + 0.5)));

  const { data } = ctx.getImageData(0, 0, w, h);
  const filled = (x, y) => data[(Math.round(y) * w + Math.round(x)) * 4 + 3] > 128;
  const sampleAt = (gap) => {
    const pts = [];
    for (let y = gap / 2; y < h; y += gap) {
      for (let x = gap / 2; x < w; x += gap) {
        if (filled(x, y)) pts.push({ x: x - w / 2, y: y - h / 2 });
      }
    }
    return pts;
  };

  // Pick a grid spacing that yields about one point per particle, so every particle
  // lands on the letters and no strokes get skipped
  let gap = 3;
  let points = sampleAt(gap);
  for (let i = 0; i < 4 && points.length; i += 1) {
    gap = Math.max(2, gap * Math.sqrt(points.length / target));
    points = sampleAt(gap);
  }
  return points;
}

// Map scroll position to a formation stage and an overall opacity
function stageFor(scrollY, vh, progress) {
  if (scrollY < vh * 0.06) return 'point';
  if (scrollY < vh * 0.35) return 'field';
  if (scrollY < vh * 1.55) return 'text';
  if (progress < 0.5) return 'network';
  if (progress < 0.9) return 'grid';
  return 'converge';
}

function alphaFor(scrollY, vh, progress) {
  const clamp = (v) => Math.min(Math.max(v, 0), 1);
  if (progress > 0.86) return 0.22 + clamp((progress - 0.86) / 0.08) * 0.68;
  return 1 - clamp((scrollY - vh * 1.35) / (vh * 0.45)) * 0.78;
}

export default function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 480 : window.innerWidth >= 1280 ? 1300 : 800;
    const fontFamily = "'Inter', system-ui, sans-serif";

    let width = 0;
    let height = 0;
    let stage = 'point';
    let alpha = 1;
    let pointer = null;
    let raf = 0;
    let running = true;
    let time = 0;
    let last = 0;
    let glowSprite = null;

    const particles = [];
    let wordPoints = [];
    let nodes = [];
    let edges = [];

    const pointOrigin = () => ({
      x: width > 900 ? width * 0.72 : width / 2,
      y: height / 2
    });

    const makeGlow = () => {
      const r = isMobile ? 16 : 28;
      const g = document.createElement('canvas');
      g.width = g.height = r * 2;
      const gctx = g.getContext('2d');
      const grad = gctx.createRadialGradient(r, r, 0, r, r, r);
      grad.addColorStop(0, COLORS.accent);
      grad.addColorStop(0.12, COLORS.accent);
      grad.addColorStop(0.34, COLORS.glow);
      grad.addColorStop(1, 'transparent');
      gctx.fillStyle = grad;
      gctx.fillRect(0, 0, r * 2, r * 2);
      glowSprite = g;
    };

    const layout = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Network nodes on a sunflower spiral, each linked to its two nearest neighbours
      const nodeCount = Math.max(5, Math.min(11, Math.round(width / 150)));
      const spread = 0.32 * Math.min(width, height);
      nodes = Array.from({ length: nodeCount }, (_, i) => {
        const a = GOLDEN_ANGLE * i;
        const r = spread * Math.sqrt((i + 0.6) / nodeCount);
        return { x: width / 2 + Math.cos(a) * r, y: height / 2 + Math.sin(a) * r * 0.75 };
      });
      edges = [];
      nodes.forEach((n, i) => {
        nodes
          .map((m, j) => ({ j, d: (m.x - n.x) ** 2 + (m.y - n.y) ** 2 }))
          .filter(({ j }) => j !== i)
          .sort((a, b) => a.d - b.d)
          .slice(0, 2)
          .forEach(({ j }) => i < j && edges.push([i, j]));
      });

      const stacked = width < 640;
      wordPoints = sampleWord(
        stacked ? WORD_STACKED : WORD,
        Math.min(width * (stacked ? 0.9 : 0.86), 1100),
        Math.min(height * (stacked ? 0.26 : 0.36), stacked ? 240 : 260),
        count,
        fontFamily
      );

      const origin = pointOrigin();
      for (let i = 0; i < count; i += 1) {
        const a = GOLDEN_ANGLE * i;
        const r = Math.sqrt((i + 0.5) / count);
        const fx = width / 2 + Math.cos(a) * r * width * 0.48;
        const fy = height / 2 + Math.sin(a) * r * height * 0.48;
        if (!particles[i]) {
          particles[i] = {
            x: origin.x, y: origin.y, vx: 0, vy: 0, tx: origin.x, ty: origin.y,
            size: 0.7 + ((i * 37) % 10) / 10,
            seed: (i * 127.1) % 1000
          };
        }
        Object.assign(particles[i], { fx, fy, node: i % nodes.length });
      }
      assignTargets();
    };

    const assignTargets = () => {
      const origin = pointOrigin();
      const cx = width / 2;
      const cy = height / 2;
      const cols = Math.max(4, Math.round(1.4 * Math.sqrt(particles.length)));
      const rows = Math.ceil(particles.length / cols);

      particles.forEach((p, i) => {
        switch (stage) {
          case 'point':
          case 'converge':
            p.tx = origin.x;
            p.ty = origin.y;
            break;
          case 'field':
            p.tx = p.fx;
            p.ty = p.fy;
            break;
          case 'text': {
            const pt = wordPoints[Math.floor((i * wordPoints.length) / particles.length)];
            p.tx = pt ? cx + pt.x : p.fx;
            p.ty = pt ? cy + pt.y : p.fy;
            break;
          }
          case 'network': {
            const n = nodes[p.node];
            const ang = (p.seed * 0.0628) % (Math.PI * 2);
            const dist = 10 + ((p.seed * 7.31) % 31) + (i % 5) * 3;
            p.tx = n.x + Math.cos(ang) * dist;
            p.ty = n.y + Math.sin(ang) * dist;
            break;
          }
          case 'grid': {
            const sx = (width * 0.7) / cols;
            const sy = (height * 0.55) / Math.max(1, rows);
            p.tx = cx - (cols - 1) * sx * 0.5 + (i % cols) * sx;
            p.ty = cy - (rows - 1) * sy * 0.5 + Math.floor(i / cols) * sy;
            break;
          }
          default:
            break;
        }
      });
    };

    // Spring each particle toward its target; returns true once everything has settled
    const step = (dt) => {
      const pull = stage === 'text' ? 0.1 : stage === 'grid' ? 0.07 : 0.045;
      const damping = stage === 'text' ? 0.78 : 0.86;
      const wander = stage === 'field' || stage === 'network' ? 1 : 0.25;
      const radius = 0.22 * Math.min(width, height);
      let settled = true;

      for (const p of particles) {
        let ax = (p.tx - p.x) * pull;
        let ay = (p.ty - p.y) * pull;
        const t = time * 0.0004 + p.seed;
        ax += Math.cos(t * 1.7) * 0.05 * wander;
        ay += Math.sin(t * 1.3) * 0.05 * wander;

        if (pointer) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < radius * radius && d2 > 0.01) {
            const d = Math.sqrt(d2);
            const force = (1 - d / radius) * 0.9;
            ax += (dx / d) * force;
            ay += (dy / d) * force;
          }
        }

        p.vx = (p.vx + ax) * damping;
        p.vy = (p.vy + ay) * damping;
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        if (settled && (Math.abs(p.vx) > 0.02 || Math.abs(p.vy) > 0.02 || Math.abs(ax) > 0.004 || Math.abs(ay) > 0.004)) {
          settled = false;
        }
      }
      return settled;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      if (alpha <= 0.01) return;

      if (stage === 'network' || stage === 'grid') {
        ctx.strokeStyle = COLORS.line;
        ctx.globalAlpha = alpha * (stage === 'network' ? 0.6 : 0.35);
        ctx.lineWidth = 1;
        ctx.beginPath();
        if (stage === 'network') {
          edges.forEach(([a, b]) => {
            ctx.moveTo(nodes[a].x, nodes[a].y);
            ctx.lineTo(nodes[b].x, nodes[b].y);
          });
        } else {
          const cols = Math.max(4, Math.round(1.4 * Math.sqrt(particles.length)));
          for (let i = 0; i < particles.length - 1; i += 1) {
            if ((i + 1) % cols === 0) continue;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[i + 1].x, particles[i + 1].y);
          }
        }
        ctx.stroke();
      }

      const collapsed = stage === 'point' || stage === 'converge';
      ctx.fillStyle = collapsed ? COLORS.accent : stage === 'text' ? COLORS.text : COLORS.particle;
      ctx.globalAlpha = alpha * (stage === 'field' ? 0.75 : 0.9);
      ctx.beginPath();
      for (const p of particles) {
        ctx.moveTo(p.x + p.size, p.y);
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      }
      ctx.fill();

      if (collapsed && glowSprite) {
        const o = pointOrigin();
        const r = glowSprite.width / 2;
        ctx.globalAlpha = alpha;
        ctx.drawImage(glowSprite, o.x - r, o.y - r);
      }
      ctx.globalAlpha = 1;
    };

    const frame = (now) => {
      raf = 0;
      if (!running) return;
      const dt = last ? Math.min(now - last, 50) : 16.67;
      last = now;
      time += dt;
      const settled = step(dt / 16.67);
      draw();
      if (!settled || stage === 'field' || stage === 'network') raf = requestAnimationFrame(frame);
    };

    const kick = () => {
      if (reduced) {
        for (let i = 0; i < 220; i += 1) step(1);
        draw();
        return;
      }
      if (running && !raf) {
        last = 0;
        raf = requestAnimationFrame(frame);
      }
    };

    let scrollRaf = 0;
    const onScroll = () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = 0;
        const vh = window.innerHeight;
        const max = document.documentElement.scrollHeight - vh;
        const progress = max > 0 ? window.scrollY / max : 0;
        const nextStage = stageFor(window.scrollY, vh, progress);
        const nextAlpha = alphaFor(window.scrollY, vh, progress);
        if (nextStage !== stage) {
          stage = nextStage;
          assignTargets();
        }
        alpha = nextAlpha;
        kick();
      });
    };

    const onPointerMove = (e) => {
      if (e.pointerType !== 'mouse') return;
      const rect = canvas.getBoundingClientRect();
      pointer = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      kick();
    };
    const onPointerLeave = () => {
      pointer = null;
      kick();
    };

    let resizeTimer = 0;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        layout();
        kick();
      }, 120);
    };

    const onVisibility = () => {
      running = !document.hidden;
      if (running) kick();
      else if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    makeGlow();
    layout();
    onScroll();

    // Re-sample the word once the serif font has loaded so the letter shapes are right
    document.fonts?.ready.then(() => {
      layout();
      kick();
    });

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);
    if (finePointer && !reduced) {
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      document.addEventListener('pointerleave', onPointerLeave);
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      cancelAnimationFrame(scrollRaf);
      clearTimeout(resizeTimer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return (
    <div className="particle-field" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
