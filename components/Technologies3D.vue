<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const props = defineProps({
  technologies: {
    type: Array,
    required: true
  }
});

let scene, camera, renderer, group, controls;
const container = ref(null);

function init() {
  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true // Activer la transparence
  });
  renderer.setClearColor(0x000000, 0); // Fond transparent
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(container.value.clientWidth, container.value.clientHeight);
  container.value.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(40, container.value.clientWidth / container.value.clientHeight, 1, 1000);
  camera.position.set(15, 20, 30);
  scene.add(camera);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 20;
  controls.maxDistance = 50;
  controls.maxPolarAngle = Math.PI / 2;

  // scene.add(new THREE.AmbientLight(0x666666));

  const light = new THREE.PointLight(0xffffff, 3, 0, 0);
  camera.add(light);

  group = new THREE.Group();
  scene.add(group);

  // Création des points pour chaque technologie
  const vertices = [];
  const radius = 10;
  const count = props.technologies.length;

  for (let i = 0; i < count; i++) {
    const phi = Math.acos(-1 + (2 * i) / count);
    const theta = Math.sqrt(count * Math.PI) * phi;

    const x = radius * Math.cos(theta) * Math.sin(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(phi);

    vertices.push(new THREE.Vector3(x, y, z));
  }

  // Création des sprites pour les logos
  const textureLoader = new THREE.TextureLoader();
  props.technologies.forEach((tech, index) => {
    const texture = textureLoader.load(tech.image);
    const material = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      // opacity: 1
    });
    const sprite = new THREE.Sprite(material);
    sprite.position.copy(vertices[index]);
    sprite.scale.set(2, 2, 1);
    group.add(sprite);

    // Ajout du nom de la technologie
    // const canvas = document.createElement('canvas');
    // const context = canvas.getContext('2d');
    // canvas.width = 256;
    // canvas.height = 64;
    // context.fillStyle = '#000000';
    // context.font = '24px Arial';
    // context.textAlign = 'center';
    // context.fillText(tech.name, 128, 32);

    // const labelTexture = new THREE.CanvasTexture(canvas);
    // const labelMaterial = new THREE.SpriteMaterial({ 
    //   map: labelTexture,
    //   transparent: true,
    //   opacity: 0.9
    // });
    // const label = new THREE.Sprite(labelMaterial);
    // label.position.copy(vertices[index]);
    // label.position.y += 1.5;
    // label.scale.set(3, 0.75, 1);
    // group.add(label);
  });

  // Ajout d'un effet de halo
  // const haloGeometry = new THREE.SphereGeometry(radius * 1.1, 32, 32);
  // const haloMaterial = new THREE.ShaderMaterial({
  //   uniforms: {
  //     color: { value: new THREE.Color(0xffffff) }
  //   },
  //   vertexShader: `
  //     varying vec3 vNormal;
  //     void main() {
  //       vNormal = normalize(normalMatrix * normal);
  //       gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  //     }
  //   `,
  //   fragmentShader: `
  //     uniform vec3 color;
  //     varying vec3 vNormal;
  //     void main() {
  //       float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
  //       gl_FragColor = vec4(color, intensity * 0.2);
  //     }
  //   `,
  //   transparent: true,
  //   side: THREE.BackSide
  // });

  // const halo = new THREE.Mesh(haloGeometry, haloMaterial);
  // group.add(halo);

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  group.rotation.y += 0.005;
  renderer.render(scene, camera);
}

function onWindowResize() {
  if (!container.value) return;

  camera.aspect = container.value.clientWidth / container.value.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.value.clientWidth, container.value.clientHeight);
}

onMounted(() => {
  init();
  window.addEventListener('resize', onWindowResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', onWindowResize);
  if (renderer) {
    renderer.dispose();
  }
});
</script>

<template>
  <div ref="container" class="w-full h-[500px]"></div>
</template>

<style scoped>
canvas {
  width: 100%;
  height: 100%;
}
</style>