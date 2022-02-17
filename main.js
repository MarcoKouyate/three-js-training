import './style.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();

const pov = 75;
const aspectRatio = window.innerWidth/window.innerHeight;
const near = 0.01;
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
const standardMaterial = new THREE.MeshStandardMaterial({color: 0xFF6347})

const torus = new THREE.Mesh(torusGeometry, standardMaterial);

scene.add(torus);


const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5,5,15);
const pointLightHelper = new THREE.PointLightHelper(pointLight);
scene.add(pointLight, pointLightHelper);

const gridHelper = new THREE.GridHelper(10,10);
scene.add(gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.002;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.001;
  controls.update();
  renderer.render(scene, camera);
}

animate();