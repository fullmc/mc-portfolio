<template>
  <div class="stacked-carousel-container">
    <div class="carousel-wrapper">
      <div 
        class="carousel-track"
        :style="{ transform: `translateX(${currentIndex * -100}%)` }"
      >
        <div 
          v-for="(image, index) in images" 
          :key="index"
          class="carousel-card"
          :class="{ 
            'active': index === currentIndex,
            'prev': index === currentIndex - 1 || (currentIndex === 0 && index === images.length - 1),
            'next': index === currentIndex + 1 || (currentIndex === images.length - 1 && index === 0)
          }"
        >
          <img 
            :src="image.src" 
            :alt="image.alt"
            class="carousel-image"
            @click="goToSlide(index)"
          />
          <div class="card-overlay">
            <div class="card-info">
              <h3 class="card-title">{{ image.title }}</h3>
              <p class="card-description">{{ image.description }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Contrôles de navigation -->
      <button 
        @click="previousSlide" 
        class="nav-button prev-button"
        aria-label="Image précédente"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
      <button 
        @click="nextSlide" 
        class="nav-button next-button"
        aria-label="Image suivante"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
      <!-- Indicateurs -->
      <!-- <div class="carousel-indicators">
        <button
          v-for="(image, index) in images"
          :key="index"
          @click="goToSlide(index)"
          class="indicator"
          :class="{ 'active': index === currentIndex }"
          :aria-label="`Aller à l'image ${index + 1}`"
        />
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  },
  autoPlay: {
    type: Boolean,
    default: true
  },
  autoPlayInterval: {
    type: Number,
    default: 5000
  }
});

const currentIndex = ref(0);
let autoPlayTimer = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const previousSlide = () => {
  currentIndex.value = currentIndex.value === 0 
    ? props.images.length - 1 
    : currentIndex.value - 1;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

const startAutoPlay = () => {
  if (props.autoPlay) {
    autoPlayTimer = setInterval(nextSlide, props.autoPlayInterval);
  }
};

const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>

<style scoped>
.stacked-carousel-container {
  @apply relative w-full max-w-[400px] h-[500px] mx-auto;
}

.carousel-wrapper {
  @apply relative w-full h-full overflow-hidden rounded-lg;
}

.carousel-track {
  @apply flex transition-transform duration-700 ease-out h-full;
}

.carousel-card {
  @apply relative flex-shrink-0 w-full h-full transition-all duration-500 ease-out;
  transform: scale(0.8) translateY(20px);
  opacity: 0.3;
  z-index: 1;
}

.carousel-card.active {
  transform: scale(1) translateY(0);
  opacity: 1;
  z-index: 3;
}

.carousel-card.prev {
  transform: scale(0.9) translateY(10px) translateX(-20px);
  opacity: 0.7;
  z-index: 2;
}

.carousel-card.next {
  transform: scale(0.9) translateY(10px) translateX(20px);
  opacity: 0.7;
  z-index: 2;
}

.carousel-image {
  @apply w-full h-full object-cover rounded-lg cursor-pointer transition-all duration-300;
  filter: brightness(0.9);
}

.carousel-card.active .carousel-image {
  filter: brightness(1);
}

.carousel-card:hover .carousel-image {
  filter: brightness(1.1);
}

.card-overlay {
  @apply absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 rounded-lg;
}

.carousel-card:hover .card-overlay {
  @apply opacity-100;
}

.card-info {
  @apply absolute bottom-4 left-4 right-4 text-white;
}

.card-title {
  @apply text-lg font-semibold mb-1;
}

.card-description {
  @apply text-sm opacity-90;
}

/* Contrôles de navigation */
.nav-button {
  @apply absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-white/30 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50;
}

.prev-button {
  @apply left-4;
}

.next-button {
  @apply right-4;
}

.nav-button:hover {
  @apply shadow-lg;
}

/* Indicateurs */
.carousel-indicators {
  @apply absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10;
}

.indicator {
  @apply w-3 h-3 rounded-full bg-white/40 transition-all duration-300 hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-white/50;
}

.indicator.active {
  @apply bg-white scale-125;
}

/* Animations d'entrée */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.carousel-card.active {
  animation: slideIn 0.6s ease-out;
}

/* Responsive */
@media (max-width: 768px) {
  .stacked-carousel-container {
    @apply max-w-[300px] h-[400px];
  }
  
  .nav-button {
    @apply w-10 h-10;
  }
  
  .prev-button {
    @apply left-2;
  }
  
  .next-button {
    @apply right-2;
  }
}

/* Mode sombre */
.dark .nav-button {
  @apply bg-black/20 border-black/30 text-white;
}

.dark .nav-button:hover {
  @apply bg-black/30;
}

.dark .indicator {
  @apply bg-white/40;
}

.dark .indicator:hover {
  @apply bg-white/60;
}

.dark .indicator.active {
  @apply bg-white;
}
</style>