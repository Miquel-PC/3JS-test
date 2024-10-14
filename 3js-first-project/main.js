import * as THREE from 'three';

const width = window.innerWidth;
const height = window.innerHeight;

const renderer = new THREE.WebGLRenderer();
const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);
const scene = new THREE.Scene();

const light = new THREE.AmbientLight(0xf04040, 7);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({
  color: 0x00ff00
});

scene.add(light);


// CAMERA
camera.translateZ(3);
//camera.translateY(5);
// camera.vector.set(VECTOR);


// CUBE
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


renderer.setSize(width, height);
renderer.setAnimationLoop(animate);
//renderer.render(scene, camera);
camera.lookAt(cube.position);

document.querySelector("body").appendChild(renderer.domElement);


function animate() {
  // set everything that needs to change here
  cube.rotateY(0.1);
  cube.rotateX(0.1);

  renderer.render(scene, camera);
}