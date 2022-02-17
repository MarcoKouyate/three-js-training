import './style.css'

import * as THREE from 'three';
import { ceilPowerOfTwo } from 'three/src/math/mathutils';

const scene = new THREE.Scene();

const pov = 75;
const aspectRatio = window.innerWidth/window.innerHeight;
const near = 0.1;
const far = 1000;


const camera = new THREE.PerspectiveCamera(pov, aspectRatio, near, far)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const radius = 10;  
const tubeRadius = 3;  
const radialSegments = 10;  
const tubularSegments = 20;

const torusGeometry = new THREE.TorusGeometry(
    radius, tubeRadius,
    radialSegments, tubularSegments);

const basicMaterial = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true});

const torus = new THREE.Mesh(torusGeometry, basicMaterial);

scene.add(torus);


function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();