import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { color } from 'three/tsl';

console.log(OrbitControls);
const scene = new THREE.Scene();

// Aspect ratio should be defined before camera usage
const aspectRatio = window.innerWidth / window.innerHeight;

//Initialising The Loader
const textureLoader = new THREE.TextureLoader();

// Creating an Orthographic Camera
const camera = new THREE.OrthographicCamera(
    -10 * aspectRatio, // left
    10 * aspectRatio,  // right
    10,  // top
    -10, // bottom
    0.0001, // near
    1000  // far
);
camera.position.set(0, 20, 50);  // Adjust camera position for better view
camera.lookAt(0, 0, 0);
scene.add(camera);

// sloppy-mortar-stone-wall_preview.jpg

// Initialising Texture Material
const textureMaterial = textureLoader.load('src/layers/sloppy-mortar-stone-wall_normal-ogl.png')
const textureMaterial2 = textureLoader.load('src/layers/sloppy-mortar-stone-wall_roughness.png')
const textureMaterial3 = textureLoader.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2vqA7CJFYyfslYhp05LF2OyOxqMkGxhVMYw&s')
console.log(textureMaterial); 

// Creating a cube
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "white" });
cubeMaterial.map =  textureMaterial2

const pyramidGeometry = new THREE.ConeGeometry(0.71, 1, 4);
const pyramidMaterial = new THREE.MeshBasicMaterial({ color: "red", wireframe: true });


const cubeGeometry1 = new THREE.BoxGeometry(1, 2, 1);
const cubeMaterial1 = new THREE.MeshPhysicalMaterial({ 
    color: 0x00ff00, // Correct way to set color
    reflectivity: 1 // Default reflectivity
});
cubeMaterial1.map =  textureMaterial2

// pane.addInput(cubeMaterial1, 'reflectivity', { min: 0, max: 1, step: 0.01 });

// pane.addInput(cubeMaterial1,'clearcoat',{min:0,max:1,step:0.01});

const pyramidGeometry1 = new THREE.ConeGeometry(0.8, 1, 4);
const pyramidMaterial1 = new THREE.MeshBasicMaterial({ color: "red" , wireframe: false });
pyramidMaterial1.map =  textureMaterial

const cubeGeometry2 = new THREE.BoxGeometry(1, 2, 1);
const cubeMaterial2 = new THREE.MeshPhysicalMaterial({ 
    color: "orange", // Correct way to set color
    reflectivity: 1 // Default reflectivity
});
cubeMaterial2.map =  textureMaterial
    
const pyramidGeometry2 = new THREE.ConeGeometry(0.8, 1, 4);
const pyramidMaterial2 = new THREE.MeshBasicMaterial({ color: "red", wireframe: false  });
pyramidMaterial2.map =  textureMaterial

//For creating sun
const sphereGeometry = new THREE.SphereGeometry( 0.5, 20, 20 ); 
const sphereMaterial = new THREE.MeshLambertMaterial(  );
sphereMaterial.map =  textureMaterial

const groundGeometry = new THREE.BoxGeometry(10,0,10);
const groundMaterial = new THREE.MeshBasicMaterial({color: "lightgreen"});
groundMaterial.map =  textureMaterial3


const wallGeometry1 = new THREE.BoxGeometry(10,5,0);
const wallMaterial1 = new THREE.MeshBasicMaterial({color: "skyblue"});
wallMaterial1.map =  textureMaterial3

//creating rocket
const rocketGeometry  = new THREE.BoxGeometry(1, 2, 1);
const rocketMaterial1 = new THREE.MeshBasicMaterial({ color: "orange" });
rocketMaterial1.map =  textureMaterial3

const rocketTopGeometry1 = new THREE.ConeGeometry(0.8, 1, 4);
const rocketTopMaterial1 = new THREE.MeshBasicMaterial({ color: "red" });

const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
const pyramidMesh = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
const cubeMesh1 = new THREE.Mesh(cubeGeometry1, cubeMaterial1);
const pyramidMesh1 = new THREE.Mesh(pyramidGeometry1, pyramidMaterial1);
const cubeMesh2 = new THREE.Mesh(cubeGeometry2, cubeMaterial2);
const pyramidMesh2 = new THREE.Mesh(pyramidGeometry2, pyramidMaterial2);
const spear1 = new THREE.Mesh(sphereGeometry, sphereMaterial);
const ground = new THREE.Mesh(groundGeometry, groundMaterial);  
const wall1 = new THREE.Mesh(wallGeometry1, wallMaterial1);
const Rocket = new THREE.Mesh(rocketGeometry, rocketMaterial1);
const RocketTop = new THREE.Mesh(rocketTopGeometry1, rocketTopMaterial1);
const Rocket2 = new THREE.Mesh(rocketGeometry, rocketMaterial1);
const RocketTop2 = new THREE.Mesh(rocketTopGeometry1, rocketTopMaterial1);

//Lighting Part
const light = new THREE.AmbientLight("white", 1); // Using hex color
scene.add(light);

const pointLight = new THREE.PointLight(0xffa500, 1);
const pointLight1 = new THREE.PointLight(0xffa500, 1);
pointLight.position.set(1, 1, 1);
pointLight1.position.set(-0.9, 1, 0.9);
scene.add(pointLight); // Add pointLight to the scene
scene.add(pointLight1); // Add pointLight to the scene

cubeMesh.position.set(0, 0, 0);  // Positioning the cube
scene.add(cubeMesh);
scene.add(pyramidMesh);
scene.add(cubeMesh1);
scene.add(pyramidMesh1);
// scene.add(cubeMesh2);
// scene.add(pyramidMesh2);
scene.add(spear1);
scene.add(ground);
scene.add(wall1);

//Creating a group of mesh
const group1 = new THREE.Group();
group1.add(cubeMesh2);
group1.add(pyramidMesh2);
scene.add(group1);

// Creating rocket group 1
const Rockey = new THREE.Group();
Rockey.add(Rocket);
Rockey.add(RocketTop);
scene.add(Rockey);
// Creating rocket group 2
const Rockey2 = new THREE.Group();
Rockey2.add(Rocket2);
Rockey2.add(RocketTop2);
scene.add(Rockey2);

cubeMesh1.position.set(1, 0.5, 0);  // Positioning the cube
cubeMesh2.position.set(-1, 0.5, 0);  // Positioning the cube

// Creating Custom Geometry
const vertices = new Float32Array([
    0, 0, 0,  // Vertex 0
    0, 2, 0,  // Vertex 1
    2, 0, 0,  // Vertex 2
]); 

const attributes = new THREE.BufferAttribute(vertices, 3);
const bufferGeometry = new THREE.BufferGeometry();
bufferGeometry.setAttribute('position', attributes);

// Adding AxesHelper (Fix)
const axisHelper = new THREE.AxesHelper(8);
scene.add(axisHelper);

console.log("Pixel Ratio:", window.devicePixelRatio);

// Renderer setup
const canvas = document.querySelector('.canvas');  // Ensure HTML has <canvas class="canvas"></canvas>
console.log(canvas);
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('black');

// OrbitControls setup
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Resize handling
window.addEventListener('resize', () => {
    const newAspect = window.innerWidth / window.innerHeight;
    camera.left = -1 * newAspect;
    camera.right = 1 * newAspect;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Render loop
const renderLoop = () => {
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(renderLoop);
    pyramidMesh.rotation.y += 0.05;
    pyramidMesh1.rotation.y += 0.05;
    pyramidMesh2.rotation.y += 0.05;
spear1.position.x += 0.005;
spear1.position.y += 0.005;
Rockey.position.y += 0.005;
Rockey2.position.y += 0.005;
};
renderLoop();

pyramidMesh.rotation.y = 0.8;
pyramidMesh1.rotation.y = 0.8;
pyramidMesh2.rotation.y = 0.8;
pyramidMesh.position.set(0, 1, 0);
pyramidMesh1.position.set(1, 2, 0);
pyramidMesh2.position.set(-1, 2, 0);
spear1.position.set(2, 3, 0);
ground.position.set(0, -0.53, 0);
wall1.position.set(0, 1.9, -5);
Rockey.position.set(-4, 0.4, 2);
RocketTop.position.set(0, 1.5, 0);
RocketTop.rotation.y = 0.8;
Rockey2.position.set(4, 0.4, 2);
RocketTop2.position.set(0, 1.5, 0);
RocketTop2.rotation.y = 0.8;