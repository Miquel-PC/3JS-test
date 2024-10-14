import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const width = window.innerWidth;
const height = window.innerHeight;

const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);
const scene = new THREE.Scene();

const light = new THREE.DirectionalLight(0xffffff, 10);
const ambient = new THREE.AmbientLight(0xf04040, 1);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const planeGeo = new THREE.PlaneGeometry(10, 10, 20);

const planeMat = new THREE.MeshStandardMaterial({ color: 0xff0000});
const material = new THREE.MeshStandardMaterial({
  color: 0x00ff00
});

scene.add(ambient);
scene.add(light);
light.castShadow = true;


// CAMERA
camera.translateZ(15);
camera.translateY(15);


// CUBE
const cube = new THREE.Mesh(geometry, material);
const plane = new THREE.Mesh(planeGeo, planeMat);

cube.translateY(3);
plane.rotateX(-90 * Math.PI / 4);
plane.translateY(-2);


plane.receiveShadow = true;
cube.receiveShadow = true;
cube.castShadow = true;


scene.add(cube);
scene.add(plane);

renderer.setSize(width, height);
renderer.setAnimationLoop(animate);
camera.lookAt(cube.position);

document.querySelector("body").appendChild(renderer.domElement);


function animate() {
  // set everything that needs to change here
  cube.rotateY(0.03);
  cube.rotateX(0.03);

  renderer.render(scene, camera);
}