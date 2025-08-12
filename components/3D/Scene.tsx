import { useEffect } from 'react';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  title: string;
}

const Scene: React.FC<SceneProps> = ({ title }) => {
  useEffect(() => {
    const canvas = document.getElementById('three-canvas');
    if (canvas) {
      canvas.style.backgroundColor = 'white';
    }
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <Canvas id="three-canvas">
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls />
        {/ 3D Objects go here /}
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
      <motion.div
        className="absolute text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold text-orange-600">{title}</h1>
        <p className="mt-4 text-lg text-gray-700">
          Experience the elegance and luxury of luxury LRP cosmetics. Our premium products are designed to enhance your natural beauty.
        </p>
        <button className="mt-6 px-6 py-2 bg-orange-600 text-white rounded-lg shadow-lg transform transition-transform hover:scale-105 focus:outline-none">
          Shop Now
        </button>
      </motion.div>
    </div>
  );
};

export default Scene;