import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Sphere = () => {
    const mountRef = useRef();

    useEffect(() => {
        // Scène, caméra et renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Géométrie de la sphère et matériau
        const geometry = new THREE.SphereGeometry(6, 45, 45);
        const material = new THREE.PointsMaterial({ color: "white", size: 0.001 });
        const sphere = new THREE.Points(geometry, material);
        scene.add(sphere);

        // Positionnement de la caméra
        camera.position.z = 15;

        // Fonction d'animation
        const animate = () => {
            requestAnimationFrame(animate);
            sphere.rotation.x += 0.005;
            sphere.rotation.y += 0.008;
            sphere.rotation.z += 0.005;
            renderer.render(scene, camera);
        };

        // Lancement de la boucle d'animation
        animate();

        // Nettoyage
        return () => {
            if(mountRef.current){
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div className='sphereAnimation' ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default Sphere;