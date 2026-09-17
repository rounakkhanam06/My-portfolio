import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Particle Stars Galaxy
    const particleCount = 700;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color('#00f5d4'); // Cyan
    const color2 = new THREE.Color('#9d4edd'); // Purple
    const color3 = new THREE.Color('#3a86ff'); // Blue

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 80;
      positions[i3 + 1] = (Math.random() - 0.5) * 80;
      positions[i3 + 2] = (Math.random() - 0.5) * 50;

      // Color variation
      const mixedColor = i % 3 === 0 ? color1 : i % 3 === 1 ? color2 : color3;
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom Particle Texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.2, 'rgba(0,245,212,0.8)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);

    const pTexture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 0.65,
      map: pTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Floating 3D Geometric Tech Polyhedra (MERN Metaphor)
    const shapesGroup = new THREE.Group();

    // 1. React Atom-like Torus
    const torusGeo = new THREE.TorusGeometry(3.2, 0.08, 16, 100);
    const torusMat = new THREE.MeshBasicMaterial({ color: 0x61dafb, wireframe: true, transparent: true, opacity: 0.35 });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.position.set(-18, 10, -5);
    shapesGroup.add(torus);

    // 2. Node.js Hexagonal Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(2.4, 1);
    const icoMat = new THREE.MeshBasicMaterial({ color: 0x5fa04e, wireframe: true, transparent: true, opacity: 0.3 });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    ico.position.set(20, -8, -6);
    shapesGroup.add(ico);

    // 3. MongoDB Polyhedron Crystal
    const octaGeo = new THREE.OctahedronGeometry(2.2, 0);
    const octaMat = new THREE.MeshBasicMaterial({ color: 0x00f5d4, wireframe: true, transparent: true, opacity: 0.4 });
    const octa = new THREE.Mesh(octaGeo, octaMat);
    octa.position.set(16, 12, -8);
    shapesGroup.add(octa);

    // 4. Express Torus Knot
    const knotGeo = new THREE.TorusKnotGeometry(1.8, 0.4, 64, 8);
    const knotMat = new THREE.MeshBasicMaterial({ color: 0x9d4edd, wireframe: true, transparent: true, opacity: 0.25 });
    const knot = new THREE.Mesh(knotGeo, knotMat);
    knot.position.set(-15, -12, -4);
    shapesGroup.add(knot);

    scene.add(shapesGroup);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow physics
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate galaxy
      particles.rotation.y = elapsedTime * 0.03 + targetX * 0.2;
      particles.rotation.x = -elapsedTime * 0.02 + targetY * 0.15;

      // Rotate shapes
      torus.rotation.x = elapsedTime * 0.4;
      torus.rotation.y = elapsedTime * 0.6;

      ico.rotation.x = elapsedTime * 0.3;
      ico.rotation.z = elapsedTime * 0.5;

      octa.rotation.y = elapsedTime * 0.5;
      octa.rotation.x = elapsedTime * 0.3;

      knot.rotation.x = elapsedTime * 0.35;
      knot.rotation.y = elapsedTime * 0.25;

      // Group slight parallax
      shapesGroup.position.x = targetX * 3;
      shapesGroup.position.y = targetY * 2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      torusGeo.dispose();
      icoGeo.dispose();
      octaGeo.dispose();
      knotGeo.dispose();
    };
  }, []);

  return <div ref={mountRef} id="canvas-3d-bg" />;
}
