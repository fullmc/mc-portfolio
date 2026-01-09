<script setup lang="ts">
import createGlobe from 'cobe'
import { onMounted, ref, watch } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const pointerInteracting = ref<number | null>(null)
const pointerInteractionMovement = ref(0)
const phi = ref(0)
const isDark = ref(false)
const r = ref(0)

// Détecter le mode sombre/clair
const detectColorMode = () => {
  if (typeof window !== 'undefined') {
    isDark.value = document.documentElement.classList.contains('dark')
  }
}

// Simple spring animation using requestAnimationFrame
const targetR = ref(0)
const animateR = () => {
  const diff = targetR.value - r.value
  r.value += diff * 0.1 // Smooth interpolation
  if (Math.abs(diff) > 0.001) {
    requestAnimationFrame(animateR)
  }
}

// Fonction pour créer le globe avec les bonnes couleurs
const createGlobeInstance = () => {
  if (!canvasRef.value) return

  createGlobe(canvasRef.value as HTMLCanvasElement, {
    devicePixelRatio: 2,
    width: 900,
    height: 900,
    phi: 0,
    theta: 0,
    dark: isDark.value ? 1 : 0,
    diffuse: 1.2,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: isDark.value ? [0.1, 0.2, 0.3] : [0.2, 0.4, 0.6], // Couleur Terre (121826 en RGB)
    markerColor: [1, 1, 1], // Couleur du marker [R, G, B] (0-1) - Blanc
    glowColor: isDark.value ? [0.29, 0.33, 0.40] : [0.84, 0.80, 0.73], // Lueur adaptée à la nouvelle couleur
    markers: [
      // longitude latitude - Markers sur tous les continents
      { location: [46.6031, 1.8883], size: 0.05 }, // Europe (France)
      { location: [39.8283, -98.5795], size: 0.05 }, // Amérique du Nord (USA)
      { location: [-14.2350, -51.9253], size: 0.05 }, // Amérique du Sud (Brésil)
      { location: [25.2744, 133.7751], size: 0.05 }, // Océanie (Australie)
      { location: [35.8617, 104.1954], size: 0.05 }, // Asie (Chine)
      { location: [8.7832, 34.5085], size: 0.05 }, // Afrique (Éthiopie)
    ],
    onRender: (state) => {
      // This prevents rotation while dragging
      if (!pointerInteracting.value) {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        phi.value += 0.005
      }
      state.phi = phi.value + r.value
    },
  })
  canvasRef.value!.style.opacity = '1'
}

onMounted(() => {
  detectColorMode()
  createGlobeInstance()
  
  // Observer les changements de classe pour détecter le changement de thème
  const observer = new MutationObserver(() => {
    const wasDark = isDark.value
    detectColorMode()
    if (wasDark !== isDark.value) {
      // Recréer le globe avec les nouvelles couleurs
      createGlobeInstance()
    }
  })
  
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  })
})

function handlePointerDown(e: PointerEvent) {
  pointerInteracting.value = e.clientX - pointerInteractionMovement.value
  canvasRef.value!.style.cursor = 'grabbing'
}

function handlePointerUp(_: PointerEvent) {
  pointerInteracting.value = null
  canvasRef.value!.style.cursor = 'grab'
}

function handlePointerOut(_: PointerEvent) {
  pointerInteracting.value = null
  canvasRef.value!.style.cursor = 'grab'
}

function handleMouseMove(e: MouseEvent) {
  if (pointerInteracting.value !== null) {
    const delta = e.clientX - pointerInteracting.value
    pointerInteractionMovement.value = delta
    targetR.value = delta / 200
    animateR()
  }
}

function handleTouchMove(e: TouchEvent) {
  if (pointerInteracting.value !== null && e.touches[0]) {
    const delta = e.touches[0].clientX - pointerInteracting.value
    pointerInteractionMovement.value = delta
    targetR.value = delta / 100
    animateR()
  }
}
</script>

<template>
  <div class="w-full max-w-[600px]  aspect-[1/1]">
    <canvas
      ref="canvasRef"
      class="h-[500px] cursor-grab opacity-0 transition-opacity duration-500 "
      width="1000"
      height="1000"
      @pointerdown="handlePointerDown"
      @pointerup="handlePointerUp"
      @pointerout="handlePointerOut"
      @mousemove="handleMouseMove"
      @touchmove="handleTouchMove"
    />
  </div>
</template>