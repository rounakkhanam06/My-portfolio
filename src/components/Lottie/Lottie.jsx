import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web/build/player/lottie_light';

// Minimal Lottie player (SVG renderer, no expressions needed by our animations)
export default function Lottie({ animationData, loop = true, className, style, label }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !animationData) return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const anim = lottie.loadAnimation({
      container: ref.current,
      renderer: 'svg',
      loop,
      autoplay: !reduced,
      animationData,
      rendererSettings: { preserveAspectRatio: 'xMidYMid meet' }
    });
    if (reduced) anim.goToAndStop(Math.floor(anim.totalFrames / 2), true);
    return () => anim.destroy();
  }, [animationData, loop]);

  return <div ref={ref} className={className} style={style} role="img" aria-label={label} />;
}
