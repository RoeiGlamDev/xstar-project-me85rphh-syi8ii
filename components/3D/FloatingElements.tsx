import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface FloatingElementProps {
  position: [number, number, number];
}

const FloatingElement: React.FC<FloatingElementProps> = ({ position }) => {
  return (
    <motion.div
      position={position}
      animate={{ y: [0, 0.5, 0], opacity: [1, 0.8, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <sphereBufferGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#FFA500" />
    </motion.mesh>
  );
};

const FloatingElements: React.FC = () => {
  const elements = [
    [-1, 0, 0],
    [1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
  ];

  return (
    <>
      {elements.map((pos, index) => (
        <FloatingElement key={index} position={pos as [number, number, number]} />
      ))}
    </>
  );
};

const FloatingElementsComponent: React.FC = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingElements />
        <OrbitControls />
      </Canvas>
      <div className="absolute top-10 left-10 text-center">
        <h1 className="text-5xl font-bold text-orange-500">luxury LRP cosmetics</h1>
        <p className="mt-4 text-xl text-gray-700">
          Discover the essence of elegance with our exclusive range of cosmetics, designed for the modern connoisseur.
        </p>
      </div>
    </div>
  );
};

export default FloatingElementsComponent;