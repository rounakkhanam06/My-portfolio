import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DObject() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 360;
    const height = mount.clientHeight || 360;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 6.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Inner Glowing Core Sphere (Representing Full-Stack Engine)
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x00f5d4,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);

    // Inner Solid Glow
    const solidGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const solidMat = new THREE.MeshStandardMaterial({
      color: 0x7b2cbf,
      emissive: 0x3c096c,
      roughness: 0.5,
      metalness: 0.5
    });
    const solidMesh = new THREE.Mesh(solidGeo, solidMat);
    scene.add(solidMesh);

    // Outer Orbiting Rings (MERN Rings)
    const ring1Geo = new THREE.TorusGeometry(2.4, 0.035, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0x00f5d4, transparent: true, opacity: 0.8 });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    scene.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.6, 0.035, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xf72585, transparent: true, opacity: 0.7 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 3;
    scene.add(ring2);

    const ring3Geo = new THREE.TorusGeometry(2.8, 0.035, 16, 100);
    const ring3Mat = new THREE.MeshBasicMaterial({ color: 0x4cc9f0, transparent: true, opacity: 0.6 });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.y = Math.PI / 3;
    scene.add(ring3);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00f5d4, 3, 20);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const purpleLight = new THREE.PointLight(0x9d4edd, 2.5, 20);
    purpleLight.position.set(-5, -5, -2);
    scene.add(purpleLight);

    // Floating particles around hero
    const pGeo = new THREE.BufferGeometry();
    const pCount = 80;
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount * 3; i += 3) {
      const radius = 2.8 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      pPos[i] = radius * Math.sin(phi) * Math.cos(theta);
      pPos[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pPos[i + 2] = radius * Math.cos(phi);
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({ size: 0.08, color: 0x00f5d4 });
    const pCloud = new THREE.Points(pGeo, pMat);
    scene.add(pCloud);

    // Mouse Tracking for tilt
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e) => {
      const rect = mount.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX = (x / rect.width - 0.5) * 2;
      mouseY = -(y / rect.height - 0.5) * 2;
    };
    mount.addEventListener('mousemove', onMouseMove);

    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Core rotation with hover bias
      coreMesh.rotation.x = time * 0.4 + mouseY * 0.4;
      coreMesh.rotation.y = time * 0.5 + mouseX * 0.4;

      solidMesh.rotation.x = -time * 0.3;
      solidMesh.rotation.y = -time * 0.4;

      ring1.rotation.z = time * 0.5;
      ring1.rotation.x = Math.PI / 4 + mouseX * 0.2;

      ring2.rotation.y = time * 0.4;
      ring2.rotation.z = time * 0.3;

      ring3.rotation.x = time * 0.35;
      ring3.rotation.y = time * 0.6;

      pCloud.rotation.y = time * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mount) return;
      const newW = mount.clientWidth;
      const newH = mount.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      mount.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      solidGeo.dispose();
      solidMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      pGeo.dispose();
      pMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '380px',
        maxHeight: '450px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'grab'
      }}
    />
  );
}
