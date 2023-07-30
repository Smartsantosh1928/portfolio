import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Design = () => {
  const sceneRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    const cardGeometry = new THREE.BoxGeometry(2, 2, 0.1);
    const cardMaterial1 = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red card
    const cardMaterial2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green card
    const cardMaterial3 = new THREE.MeshBasicMaterial({ color: 0x0000ff }); // Blue card

    const card1 = new THREE.Mesh(cardGeometry, cardMaterial1);
    const card2 = new THREE.Mesh(cardGeometry, cardMaterial2);
    const card3 = new THREE.Mesh(cardGeometry, cardMaterial3);

    // Position the cards in a row
    card1.position.set(-3, 0, -5);
    card2.position.set(0, 0, -5);
    card3.position.set(3, 0, -5);

    scene.add(card1);
    scene.add(card2);
    scene.add(card3);

    const animate = () => {
        setInterval(() => {
            requestAnimationFrame(animate);    
            card1.rotation.x += 0.01;
            card1.rotation.y += 0.01;
            card2.rotation.x += 0.01;
            card2.rotation.y += 0.01;
            card3.rotation.x += 0.01;
            card3.rotation.y += 0.01;
            console.log(card1.rotation.x,card2.rotation.x,card3.rotation.x);
            renderer.render(scene, camera);
        },0)
      };
    
      animate();
      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
    
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
    
      window.addEventListener('resize', handleResize);
    
      return () => {
        window.removeEventListener('resize', handleResize);
      };
  }, []);

  return <div ref={sceneRef} />;
};

export default Design;