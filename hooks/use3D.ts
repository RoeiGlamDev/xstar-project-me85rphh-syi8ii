import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for initializing and managing 3D interactions for luxury LRP cosmetics.
 * This hook sets up a Three.js scene, camera, renderer, and lighting to create
 * an immersive luxury experience showcasing cosmetics products.
 * 
 * @returns {HTMLCanvasElement} The canvas element for rendering the 3D scene.
 */
const use3D = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const animationIdRef = useRef<number | null>(null);

    useEffect(() => {
        // Initialize scene, camera, and renderer
        if (canvasRef.current) {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });

            // Set the background color to white
            renderer.setClearColor(0xffffff, 1);
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);
            
            // Add ambient light
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);

            // Add directional light for luxury effect
            const directionalLight = new THREE.DirectionalLight(0xffa500, 1);
            directionalLight.position.set(0, 10, 10).normalize();
            scene.add(directionalLight);

            // Camera position
            camera.position.z = 5;

            // Store references
            sceneRef.current = scene;
            cameraRef.current = camera;
            rendererRef.current = renderer;

            // Animation loop
            const animate = () => {
                if (sceneRef.current && cameraRef.current && rendererRef.current) {
                    requestAnimationFrame(animate);
                    // Add rotation or other transformations for luxury 3D effects
                    sceneRef.current.rotation.y += 0.01;
                    rendererRef.current.render(sceneRef.current, cameraRef.current);
                }
            };
            animationIdRef.current = requestAnimationFrame(animate);
        }

        // Cleanup on unmount
        return () => {
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
            if (rendererRef.current) {
                rendererRef.current.dispose();
            }
        };
    }, []);

    return canvasRef.current;
};

export default use3D;