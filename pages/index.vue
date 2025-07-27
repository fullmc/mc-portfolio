<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Projects from './projects.vue';
import About from './about.vue';
import Contact from './contact.vue';
import Home from './home.vue'

const { locale } = useI18n();

const isVisible = ref(false);

const downloadCV = () => {
  const link = document.createElement('a');
  const cvFileName = locale.value === 'fr' ? 'cv-fr.pdf' : 'cv-en.pdf';
  link.href = `/${cvFileName}`;
  link.download = cvFileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);  
};

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

/* Statistiques */
.stat-item {
  @apply flex flex-col items-center gap-1;
}

.stat-label {
  @apply opacity-80;
}

/* Photo de profil */
.profile-container {
  @apply relative;
}

.profile-image {
  @apply rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105;
}

.profile-decoration {
  @apply absolute -inset-4 bg-gradient-to-r from-secondary-light/20 to-secondary-dark/20 rounded-3xl blur-xl -z-10;
}

.status-badge {
  @apply absolute -bottom-4 -right-4 flex items-center gap-2 px-3 py-1 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full border border-white/20 dark:border-black/20;
}

.status-dot {
  @apply w-2 h-2 bg-green-500 rounded-full animate-pulse;
}

.status-text {
  @apply text-xs font-medium text-primary-light dark:text-primary-dark;
}

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