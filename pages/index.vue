<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Projects from './projects.vue';
import About from './about.vue';
import { animateOnScroll } from '@/utils/scroll-animate';

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

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
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

  // Animation du titre principal
  Velocity(document.querySelector('.title'), {
    translateY: [0, 100],
    opacity: [1, 0]
  }, {
    duration: 1200,
    easing: "easeOutElastic",
    delay: 200
  });

  // Animation du sous-titre
  Velocity(document.querySelector('.hello'), {
    translateY: [0, -50],
    opacity: [1, 0]
  }, {
    duration: 1000,
    easing: "easeOutCubic",
    delay: 400
  });

  // Animation de la photo de profil
  Velocity(document.querySelector('.profile-pic'), {
    translateX: [0, 100],
    rotateZ: [0, 10],
    opacity: [1, 0]
  }, {
    duration: 1200,
    easing: "easeOutCubic",
    delay: 600
  });

  // Animation des boutons CTA
  Velocity(document.querySelectorAll('.cta-button'), {
    translateY: [0, 30],
    opacity: [1, 0]
  }, {
    duration: 800,
    easing: "easeOutCubic",
    delay: 800,
    stagger: 200
  });


  // Animations au scroll
  animateOnScroll(
    '.scroll-animate',
    { opacity: [1, 0], translateY: [0, 50] },
    { duration: 800, easing: 'easeOutCubic' }
  );

  // Animation des particules en arrière-plan
  animateOnScroll(
    '.floating-elements',
    { translateY: [0, -20], opacity: [1, 0.5] },
    { duration: 2000, easing: 'easeInOutSine' }
  );
});
</script>

<template>
  <div class="relative bg-background-light dark:bg-background-dark overflow-hidden">
    <!-- Éléments flottants en arrière-plan -->
    <div class="floating-elements absolute inset-0 pointer-events-none">
      <!-- Points dans la partie supérieure -->
      <div class="absolute top-20 left-10 w-4 h-4 bg-[#C1440E]/20 dark:bg-[#F1A94E] rounded-full animate-pulse"></div>
      <div class="absolute top-40 right-20 w-6 h-6 bg-[#C1440E]/15 dark:bg-[#F1A94E] rounded-full animate-pulse" style="animation-delay: 1s;"></div>
      <div class="absolute top-80 left-[40%] w-6 h-6 bg-[#C1440E]/15 dark:bg-[#F1A94E] rounded-full animate-pulse" style="animation-delay: 1s;"></div>
      <div class="absolute top-[50%] left-[10%] w-6 h-6 bg-[#C1440E]/15 dark:bg-[#F1A94E] rounded-full animate-pulse" style="animation-delay: 1s;"></div>
      <div class="absolute top-40 right-20 w-6 h-6 bg-[#C1440E]/15 dark:bg-[#F1A94E] rounded-full animate-pulse" style="animation-delay: 1s;"></div>
      <div class="absolute bottom-40 left-20 w-3 h-3 bg-[#C1440E]/25 dark:bg-[#F1A94E] rounded-full animate-pulse" style="animation-delay: 2s;"></div>
      <div class="absolute bottom-20 right-10 w-5 h-5 bg-[#C1440E]/10 dark:bg-[#F1A94E] rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
      
      <!-- Points supplémentaires répartis sur toute la page -->
      <div class="absolute top-10 left-[20%] w-3 h-3 bg-[#C1440E]/30 dark:bg-[#F1A94E]/40 rounded-full animate-pulse" style="animation-delay: 0.3s;"></div>
      <div class="absolute top-60 right-[15%] w-4 h-4 bg-[#C1440E]/25 dark:bg-[#F1A94E]/35 rounded-full animate-pulse" style="animation-delay: 1.5s;"></div>
      <div class="absolute top-[30%] left-[60%] w-5 h-5 bg-[#C1440E]/20 dark:bg-[#F1A94E]/30 rounded-full animate-pulse" style="animation-delay: 0.8s;"></div>
      <div class="absolute top-[70%] right-[30%] w-3 h-3 bg-[#C1440E]/35 dark:bg-[#F1A94E]/45 rounded-full animate-pulse" style="animation-delay: 2.2s;"></div>
      <div class="absolute top-[85%] left-[25%] w-4 h-4 bg-[#C1440E]/15 dark:bg-[#F1A94E]/25 rounded-full animate-pulse" style="animation-delay: 1.8s;"></div>
      <div class="absolute top-[15%] right-[45%] w-2 h-2 bg-[#C1440E]/40 dark:bg-[#F1A94E]/50 rounded-full animate-pulse" style="animation-delay: 0.6s;"></div>
      <div class="absolute top-[45%] left-[80%] w-3 h-3 bg-[#C1440E]/30 dark:bg-[#F1A94E]/40 rounded-full animate-pulse" style="animation-delay: 1.2s;"></div>
      <div class="absolute top-[90%] right-[5%] w-4 h-4 bg-[#C1440E]/20 dark:bg-[#F1A94E]/30 rounded-full animate-pulse" style="animation-delay: 0.9s;"></div>
      <div class="absolute top-[25%] left-[5%] w-3 h-3 bg-[#C1440E]/25 dark:bg-[#F1A94E]/35 rounded-full animate-pulse" style="animation-delay: 1.7s;"></div>
      <div class="absolute top-[55%] right-[60%] w-5 h-5 bg-[#C1440E]/15 dark:bg-[#F1A94E]/25 rounded-full animate-pulse" style="animation-delay: 0.4s;"></div>
      <div class="absolute top-[75%] left-[70%] w-2 h-2 bg-[#C1440E]/35 dark:bg-[#F1A94E]/45 rounded-full animate-pulse" style="animation-delay: 2.5s;"></div>
      <div class="absolute top-[35%] right-[80%] w-4 h-4 bg-[#C1440E]/20 dark:bg-[#F1A94E]/30 rounded-full animate-pulse" style="animation-delay: 1.1s;"></div>
      <div class="absolute top-[65%] left-[90%] w-3 h-3 bg-[#C1440E]/30 dark:bg-[#F1A94E]/40 rounded-full animate-pulse" style="animation-delay: 0.7s;"></div>
      <div class="absolute top-[95%] right-[25%] w-4 h-4 bg-[#C1440E]/25 dark:bg-[#F1A94E]/35 rounded-full animate-pulse" style="animation-delay: 1.9s;"></div>
      <div class="absolute top-[5%] left-[85%] w-3 h-3 bg-[#C1440E]/20 dark:bg-[#F1A94E]/30 rounded-full animate-pulse" style="animation-delay: 1.3s;"></div>
      <div class="absolute top-[80%] right-[50%] w-2 h-2 bg-[#C1440E]/40 dark:bg-[#F1A94E]/50 rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
      <div class="absolute top-[40%] left-[15%] w-5 h-5 bg-[#C1440E]/15 dark:bg-[#F1A94E]/25 rounded-full animate-pulse" style="animation-delay: 2.1s;"></div>
      <div class="absolute top-[60%] right-[10%] w-3 h-3 bg-[#C1440E]/30 dark:bg-[#F1A94E]/40 rounded-full animate-pulse" style="animation-delay: 1.4s;"></div>
      <div class="absolute top-[20%] left-[75%] w-4 h-4 bg-[#C1440E]/25 dark:bg-[#F1A94E]/35 rounded-full animate-pulse" style="animation-delay: 0.8s;"></div>
      <div class="absolute top-[50%] right-[40%] w-2 h-2 bg-[#C1440E]/35 dark:bg-[#F1A94E]/45 rounded-full animate-pulse" style="animation-delay: 2.3s;"></div>
    </div>


    <!-- Section Hero -->
    <section class="hero-section flex items-center justify-between mx-[8em] relative h-screen">
      <div class="flex flex-col gap-8 max-w-2xl">
        <div class="">
          <span class="title text-[90px] font-bold leading-tight tracking-wide text-primary-light dark:text-primary-dark whitespace-pre-line">
            {{ $t('home_id') }}
          </span>
          <h1 class="hello text-2xl font-light text-[#F97316]">
            {{ $t('home_dev') }}
          </h1>
        </div>
          
        <!-- Description dynamique -->
        <p class="scroll-animate text-lg text-primary-light dark:text-primary-dark leading-relaxed">
          {{ $t('home_description') }}
        </p>


        <!-- Statistiques rapides -->
        <div class="scroll-animate flex gap-8">
          <div class="stat-item">
            <p class="text-xl font-medium text-[#F97316]">3+</p>
            <p class="stat-label text-sm text-primary-light dark:text-primary-dark">{{ $t('years_experience') }}</p>
          </div>
          <div class="stat-item">
            <p class="text-xl font-medium text-[#F97316]">5+</p>
            <p class="stat-label text-sm text-primary-light dark:text-primary-dark">{{ $t('projects_completed') }}</p>
          </div>
          <div class="stat-item">
            <p class="text-xl font-medium text-[#F97316]">2+</p>
            <p class="stat-label text-sm text-primary-light dark:text-primary-dark">{{ $t('technologies') }}</p>
          </div>
        </div>

        <!-- Call-to-Action Buttons -->
        <!-- <div class="flex gap-4">
          <button 
            @click="downloadCV"
            class="cta-button primary-btn group"
          >
            <span>{{ $t('download_cv') }}</span>
            <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </button>
          
          <button 
            @click="scrollToSection('projects')"
            class="cta-button secondary-btn group"
          >
            <span>{{ $t('view_projects') }}</span>
            <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </button>
        </div> -->

      </div>

      <!-- Photo de profil avec effet -->
      <div class="profile-pic relative">
        <div class="profile-container">
          <img src="../public/nana-mc.png" alt="profile" class="block w-[300px] md:w-[400px] profile-image">
          
          <!-- Cercle décoratif -->
          <div class="profile-decoration"></div>
          
          <!-- Badge de statut -->
          <div class="status-badge">
            <div class="status-dot"></div>
            <span class="status-text">{{ $t('available_for_work') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Projets -->
    <section id="projects" class="min-h-screen scroll-animate">
      <Projects />
    </section>

    <!-- Section A propos -->
    <section id="about" class="min-h-screen scroll-animate">
      <About />
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