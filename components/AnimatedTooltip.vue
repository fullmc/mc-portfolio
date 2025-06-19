<script setup lang='ts'>
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'motion-v'
import { ref, computed } from 'vue'

export interface Items {
  id: number
  name: string
  designation?: string
  image: string
}

const props = defineProps<{
  items: Items[]
}>()

const hoveredIndex = ref<number | null>(null)
const springConfig = { stiffness: 150, damping: 15 }
const x = useMotionValue(0)
const y = useMotionValue(0)

const rotate = useSpring(
  useTransform(x, [-100, 100], [-15, 15]),
  springConfig,
)

const translateX = useSpring(
  useTransform(x, [-100, 100], [-30, 30]),
  springConfig,
)

const translateY = useSpring(
  useTransform(y, [-100, 100], [-10, 10]),
  springConfig,
)

function handleMouseMove(event: any) {
  const rect = event.target.getBoundingClientRect()
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  x.set(event.clientX - rect.left - centerX)
  y.set(event.clientY - rect.top - centerY)
}

// Couleurs dynamiques pour les tooltips
const getTooltipColors = (index: number) => {
  const colors = [
    'from-blue-500/90 to-cyan-500/90',
    'from-purple-500/90 to-pink-500/90',
    'from-emerald-500/90 to-teal-500/90',
    'from-orange-500/90 to-red-500/90',
    'from-indigo-500/90 to-blue-500/90',
    'from-pink-500/90 to-rose-500/90',
    'from-green-500/90 to-emerald-500/90',
    'from-yellow-500/90 to-orange-500/90',
    'from-violet-500/90 to-purple-500/90',
    'from-cyan-500/90 to-blue-500/90',
    'from-rose-500/90 to-pink-500/90',
    'from-teal-500/90 to-cyan-500/90',
    'from-blue-500/90 to-indigo-500/90',
    'from-purple-500/90 to-violet-500/90',
    'from-emerald-500/90 to-green-500/90',
    'from-orange-500/90 to-yellow-500/90',
  ]
  return colors[index % colors.length]
}
</script>

<template>
  <div class="flex flex-wrap justify-center gap-6">
    <div 
      v-for="(item, idx) in props.items" 
      :key="item.id"
      class="group relative"
      @mouseenter="() => hoveredIndex = item.id"
      @mouseleave="() => hoveredIndex = null"
    >
      <!-- Tooltip amélioré -->
      <AnimatePresence mode="popLayout">
        <div v-if="hoveredIndex === item.id">
          <motion.div
            :initial="{
              opacity: 0,
              y: 30,
              scale: 0.8,
              filter: 'blur(10px)',
            }"
            :animate="{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
              transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20,
                mass: 0.8,
              },
            }"
            :exit="{
              opacity: 0,
              y: 20,
              scale: 0.9,
              filter: 'blur(5px)',
              transition: {
                duration: 0.2,
              },
            }"
            :style="{
              translateX,
              translateY,
              rotate,
            }"
            class="absolute -top-20 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center"
          >
            <!-- Tooltip background avec gradient -->
            <div 
              :class="`relative overflow-hidden rounded-2xl bg-gradient-to-br ${getTooltipColors(idx)} backdrop-blur-xl border border-white/20 shadow-2xl`"
              style="min-width: 140px;"
            >
              <!-- Effet de brillance -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
              
              <!-- Contenu du tooltip -->
              <div class="relative z-10 px-4 py-3 text-center">
                <div class="text-sm font-semibold text-white drop-shadow-sm">
                  {{ item.name }}
                </div>
                <div v-if="item.designation" class="text-xs text-white/80 mt-1">
                  {{ item.designation }}
                </div>
              </div>
              
              <!-- Pointeur du tooltip -->
              <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-white/20 to-transparent transform rotate-45 border-r border-b border-white/20"></div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>

      <!-- Icône de technologie améliorée -->
      <motion.div
        :while-hover="{ 
          scale: 1.15,
          rotate: 5,
          transition: { type: 'spring', stiffness: 400, damping: 10 }
        }"
        :while-tap="{ scale: 0.95 }"
        class="relative"
      >
        <!-- Effet de glow au hover -->
        <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <!-- Container de l'image -->
        <div class="relative bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:border-white/40">
          <img
            :src="item.image"
            :alt="item.name"
            class="h-16 w-16 object-contain transition-all duration-500 group-hover:drop-shadow-lg"
            @mousemove="handleMouseMove"
          />
        </div>
        
        <!-- Effet de particules au hover -->
        <div class="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent animate-pulse"></div>
        </div>
      </motion.div>
    </div>
  </div>
</template>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.group:hover img {
  animation: float 2s ease-in-out infinite;
}

/* Amélioration des transitions */
.group {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Effet de profondeur */
.group:hover {
  transform: translateZ(20px);
}
</style>