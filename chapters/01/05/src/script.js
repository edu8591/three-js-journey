import * as THREE from "three";
import gsap from "gsap";
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

//! Solution 1
// // Time
// let time = Date.now();
// // Animations
// const tick = () => {
//   const currentTime = Date.now();
//   const deltaTime = currentTime - time;
//   time = currentTime;
//   console.info(deltaTime);
//   // Update Objects
//   mesh.rotation.y += 0.001 * deltaTime;

//   //   Render Object
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(tick);
// };

// //! Solution 2
// // Time
// const timer = new THREE.Timer();
// // Animations
// const tick = (timestamp = 0) => {
//   timer.update(timestamp);
//   const elapsedTime = timer.getElapsed();
//   console.info(elapsedTime);
//   // Update Objects
//   mesh.rotation.y = elapsedTime;
//   mesh.position.y = Math.sin(elapsedTime);
//   mesh.position.x = Math.cos(elapsedTime);

//   camera.position.y = Math.cos(-elapsedTime);
//   //   Render Object
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(tick);
// };

//! Solution 3 using a library (GSAP)
gsap.to(mesh.rotation, { x: 2, duration: 1, delay: 1 });
const tick = () => {
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
