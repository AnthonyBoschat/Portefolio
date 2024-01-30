import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Sphere = () => {
    const [startAnimation, setStartAnimation] = useState(false)
    const mountRef = useRef();
    const cameraRef = useRef({})

    useEffect(() => {
        // Scène, caméra et renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
        camera.position.z = 15;
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        mountRef.current.appendChild(renderer.domElement);
        cameraRef.current = {camera}

        const get3DPointMaterial = (color, size) => {
            return {
                vertexShader: `
                void main() {
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    gl_PointSize = ${size}; // Taille des points
                }
                `,
                fragmentShader: `
                    void main() {
                        float r = 0.0, delta = 0.0;
                        vec2 cxy = 2.0 * gl_PointCoord - 1.0;
                        r = dot(cxy, cxy);
                        if (r > 1.0) {
                            discard;
                        }
                        gl_FragColor = vec4(${color}); // Couleur des points
                    }
                `,
                transparent: true,
            }
        }
        


        // Géométrie de la plus grande sphère
        const sphere1Geometry = new THREE.SphereGeometry(6, 100, 50);
        // const sphere1Material = new THREE.PointsMaterial({color: "blue",size: 0.01});
        const sphere1Material = new THREE.ShaderMaterial(get3DPointMaterial("0, 0, 1, 1", "1.5"));
        const sphere1 = new THREE.Points(sphere1Geometry, sphere1Material);
        scene.add(sphere1);

        
        // Géométrie de la plus petite sphère
        const sphere2Geometry = new THREE.SphereGeometry(3, 80, 40); // Une petite sphère
        // const sphere2Material = new THREE.PointsMaterial({ color: "red", size: 0.01} ); // Couleur rouge pour visibilité
        const sphere2Material = new THREE.ShaderMaterial(get3DPointMaterial("1, 0, 0, 1", "1.0"));
        const sphere2 = new THREE.Points(sphere2Geometry, sphere2Material);
        scene.add(sphere2)



        // Géométrie du carré central 
        const centerPointGeometry = new THREE.SphereGeometry();
        const vertices = [];
        const colors = [];
        // Ajouter des vertices et des couleurs
        for (let i = 0; i < 500; i++) {
            vertices.push(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5);
            colors.push(Math.random(), Math.random(), Math.random());
        }
        // Ajouter des attributs de vertex et de couleur à la géométrie
        centerPointGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        centerPointGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        const centerPointMaterial = new THREE.PointsMaterial({
            size: 0.01,
            vertexColors:true,
            });

        const centerPoint = new THREE.Points(centerPointGeometry, centerPointMaterial);
        scene.add(centerPoint);


        // Fonction d'animation
        const animate = () => {
            requestAnimationFrame(animate);

            sphere1.rotation.x += 0.005;
            sphere1.rotation.y += 0.010;
            sphere1.rotation.z += 0.005;

            sphere2.rotation.x -= 0.005;
            sphere2.rotation.y -= 0.010;
            sphere2.rotation.z -= 0.005;

            centerPoint.rotation.x += 0.010;
            centerPoint.rotation.y -= 0.020;
            centerPoint.rotation.z += 0.010;


            

            

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


    useEffect(() => {
        let intervalID

        
        const {camera} = cameraRef.current

        const adjustCamera = () => {
            const calculCameraDistance = (cameraPosition) => {
                return cameraPosition / 100
            }
    
            if(startAnimation){
                if(camera.position.z > 2){
                    camera.position.z -= calculCameraDistance(camera.position.z)
                    return false
                }else{return true}
            }else if(!startAnimation){
                if(camera.position.z < 15){
                    camera.position.z += calculCameraDistance(camera.position.z)
                    return false
                }else{return true}
            }
        }

        intervalID = setInterval(() => {
            const endOfAnimation = adjustCamera()
            if(endOfAnimation){
                clearInterval(intervalID)
            }
        }, 20);
        

        return () => clearInterval(intervalID)

    }, [startAnimation])


    return <div onClick={() => setStartAnimation(current => !current)} className='sphereAnimation' ref={mountRef} style={{ width: '100%', height: '100%'}} />;
};

export default Sphere;




