<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Projects from './projects.vue';
import About from './about.vue';
import Contact from './contact.vue';
import Home from './home.vue'

const { locale } = useI18n();

const isVisible = ref(false);

onMounted(async () => {
  const Velocity = (await import('velocity-animate')).default;
  if (typeof window === 'undefined') return;

  // Animation d'entrée principale
  Velocity(document.querySelector('.hero-section'), {
    opacity: [1, 0],
    translateY: [0, 50]
  }, {
    duration: 1000,
    easing: "easeOutCubic"
  });

});
</script>

<template>
  <div class="relative overflow-hidden flex flex-col" id="home">
    <!-- Section home -->
    <section id="home">
      <Home />
    </section>

    <!-- Section Projets -->
    <section id="projects" class="min-h-screen flex items-center justify-center">
      <Projects />
    </section>

    <!-- Section A propos -->
    <section id="about" class="min-h-screen flex items-center justify-center">
      <About />
    </section>

    <!-- Section Contact -->
    <section id="contact" class="min-h-screen flex items-center justify-center">
      <Contact />
    </section>
  </div>
</template>

<style scoped>


/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.floating-elements > div {
  animation: float 3s ease-in-out infinite;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section {
    @apply mx-4 flex-col text-center gap-8;
  }
  
  .title {
    @apply text-6xl;
  }
  
  .profile-image {
    @apply w-[250px];
  }
  
  .nav-button {
    @apply px-3 py-1 text-xs;
  }
}

/* Effets de survol */
.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

/* Optimisations de performance */
.profile-image,
.nav-button,
.cta-button {
  @apply will-change-transform; 
}
</style>