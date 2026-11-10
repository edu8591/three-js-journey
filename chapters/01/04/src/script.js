import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");
/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

// Scene
const scene = new THREE.Scene();
/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.y = 1;
// camera.position.x = 1;
scene.add(camera);

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry, material);

// // positioning objects
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
// // mesh.position.set(0.7, -0.6, 1); // you can pass the properties x, y, z directly to set the position.

// // Scale objects
// // mesh.scale.x = 2;
// // mesh.scale.y = 0.5;
// // mesh.scale.z = 0.5;
// mesh.scale.set(2, 0.5, 0.5);

// mesh.rotation.reorder("YXZ");
// mesh.rotation.y = Math.PI * 0.25;
// mesh.rotation.x = Math.PI * 0.25;

// console.info("initial position length", mesh.position.length()); // the distance from the center of the scene to the mesh's position.
// console.info(
//   "distance between the cube and the camera",
//   mesh.position.distanceTo(camera.position),
// ); // the distance between 2 points in 3D space.

// // mesh.position.normalize(); // normalize the vector (make its length 1)
// // console.info("normalized position length", mesh.position.length()); // now position is 1

// scene.add(mesh);
// camera.lookAt(mesh.position);

const group = new THREE.Group();
scene.add(group);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true,
});

const cube1 = new THREE.Mesh(geometry, material);
group.add(cube1);

const cube2 = new THREE.Mesh(geometry, material);
cube2.position.x = -1.5;
group.add(cube2);

const cube3 = new THREE.Mesh(geometry, material);
cube3.position.x = 1.5;
group.add(cube3);

group.position.y = 1;
group.scale.y = 2;

group.rotation.y = Math.PI * 0.25;

// Axes Helper
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
