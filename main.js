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

renderer.render(scene, camera);