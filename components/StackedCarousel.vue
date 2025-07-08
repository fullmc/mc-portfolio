<template>
  <div class="simple-carousel-container">
    <div class="simple-carousel-viewport" ref="viewportRef">
      <div
        class="simple-carousel-track"
        :style="trackStyle"
        @transitionend="handleTransitionEnd"
      >
        <!-- Duplique la dernière image au début -->
        <div class="simple-carousel-slide" v-if="images.length">
          <img :src="images[images.length-1].src" :alt="images[images.length-1].alt" class="simple-carousel-image" />
        </div>
        <!-- Slides réelles -->
        <div
          v-for="(image, index) in images"
          :key="index"
          class="simple-carousel-slide"
        >
          <img :src="image.src" :alt="image.alt" class="simple-carousel-image" />
        </div>
        <!-- Duplique la première image à la fin -->
        <div class="simple-carousel-slide" v-if="images.length">
          <img :src="images[0].src" :alt="images[0].alt" class="simple-carousel-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue';

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

// L'index commence à 1 (car 0 = image dupliquée à gauche)
const currentIndex = ref(1);
const isTransitioning = ref(true);
let autoPlayTimer = null;

const gap = 24; // px
const viewportRef = ref(null);
const viewportWidth = ref(0);

const updateWidth = () => {
  if (viewportRef.value) {
    viewportWidth.value = viewportRef.value.offsetWidth;
  }
};

const nextSlide = () => {
  if (!props.images.length) return;
  isTransitioning.value = true;
  currentIndex.value++;
};

const handleTransitionEnd = () => {
  // Si on est sur la fausse première image (après la dernière vraie)
  if (currentIndex.value === props.images.length + 1) {
    isTransitioning.value = false;
    currentIndex.value = 1;
  }
  // Si on est sur la fausse dernière image (avant la première vraie)
  if (currentIndex.value === 0) {
    isTransitioning.value = false;
    currentIndex.value = props.images.length;
  }
};

const startAutoPlay = () => {
  if (props.autoPlay) {
    autoPlayTimer = setInterval(() => {
      nextSlide();
    }, props.autoPlayInterval);
  }
};

const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
};

const trackStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * (viewportWidth.value + gap)}px)`,
  transition: isTransitioning.value ? 'transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)' : 'none',
  gap: `${gap}px`
}));

onMounted(() => {
  updateWidth();
  window.addEventListener('resize', updateWidth);
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
  window.removeEventListener('resize', updateWidth);
});

// Si autoplay ou images changent, on reset
watch(() => props.images, () => {
  currentIndex.value = 1;
  isTransitioning.value = true;
});
</script>

<style scoped>
.simple-carousel-container {
  width: 30vw;
  height: 70vh;
  border-radius: 24px;
  overflow: hidden;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.simple-carousel-viewport {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 24px;
}
.simple-carousel-track {
  display: flex;
  height: 100%;
  gap: 10px;
  transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
}
.simple-carousel-slide {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.simple-carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  transition: filter 0.3s;
}
@media (max-width: 500px) {
  .simple-carousel-container {
    width: 95vw;
    height: 60vw;
    min-height: 220px;
    max-width: 98vw;
  }
}
</style>