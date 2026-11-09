import * as THREE from "three";
console.info(THREE);

// Canvas
const canvas = document.querySelector("canvas#webgl");
console.info(canvas);
// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// scene setup
const scene = new THREE.Scene();

// Object setup
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  //   wireframe: true,
});
const cube = new THREE.Mesh(geometry, material);

// add the object to the scene
scene.add(cube);

// Camera setup
const aspect = sizes.width / sizes.height;
// normally for websites it would be 35-45
const camera = new THREE.PerspectiveCamera(75, aspect);
camera.position.z = 3;
scene.add(camera);

//  Renderer setup
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
