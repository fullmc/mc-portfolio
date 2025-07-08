<script setup>
import Tooltip from 'primevue/tooltip';
import { ref, onMounted } from 'vue';
import 'primeicons/primeicons.css';
import Globe from '@/components/Globe.vue';
import { animateOnScroll } from '@/utils/scroll-animate';
import AnimatedTooltip from '@/components/AnimatedTooltip.vue';
import StackedCarousel from '@/components/StackedCarousel.vue';

// Ajout de la directive Tooltip
const vTooltip = Tooltip;

const technologies = ref([
  { name: 'Vue.js', designation: 'Framework Frontend', image: '/vuejs.svg', id: 1 },
  { name: 'React', designation: 'Bibliothèque UI', image: '/react.svg', id: 2 },
  { name: 'JavaScript', designation: 'Langage de programmation', image: '/js-light.svg', id: 3 },
  { name: 'TypeScript', designation: 'JavaScript typé', image: '/typescript.svg', id: 4 },
  { name: 'Tailwind CSS', designation: 'Framework CSS', image: '/tailwind.png', id: 5 },
  { name: 'Next.js', designation: 'Framework React', image: '/nextjs.svg', id: 6 },
  { name: 'Nuxt.js', designation: 'Framework Vue', image: '/nuxt.svg', id: 7 },
  { name: 'Express.js', designation: 'Framework Node.js', image: '/express.svg', id: 8 },
  { name: 'Node.js', designation: 'Runtime JavaScript', image: '/node.svg', id: 9 },
  { name: 'SQLite', designation: 'Base de données', image: '/sqlite.svg', id: 10 },
  { name: 'Prisma', designation: 'ORM moderne', image: '/prisma.svg', id: 11 },
  { name: 'Git', designation: 'Contrôle de version', image: '/git.png', id: 12 },
  { name: 'Figma', designation: 'Design UI/UX', image: '/figma.webp', id: 13 },
  { name: 'VS Code', designation: 'Éditeur de code', image: '/vscode.svg', id: 14 },
  { name: 'Cursor', designation: 'IDE IA', image: '/cursor.png', id: 15 },
  { name: 'Jira', designation: 'Gestion de projet', image: '/jira.svg', id: 16 },
]);

// Images pour le carousel
const carouselImages = ref([
  {
    src: '/mcwttj.svg',
    alt: 'Portrait professionnel',
  },
  {
    src: '/mc-adidas.png',
    alt: '10K Adidas',
  },
  {
    src: '/mc-run.png',
    alt: 'Moi devant le big ben',
  },
  {
    src: '/mc-cat.png',
    alt: 'Un chat et moi',
  },
  {
    src: '/wttj.webp',
    alt: 'Shooting WTTJ',
  },
  {
    src: '/mc-ecureuil.png',
    alt: 'Un écureuil et moi',
  },
]);

onMounted(async () => {
  if (typeof window === 'undefined') return;

  // Animation des lettres du titre (si tu veux au scroll)
  animateOnScroll(
    '.split-char',
    { opacity: [1, 0], translateY: [0, 100] },
    { duration: 1000, easing: 'easeOutBack' },
    50 // stagger
  );

  // Animation de la section principale
  animateOnScroll(
    '.about-section',
    { opacity: [1, 0], translateY: [0, 50] },
    { duration: 1000, easing: 'easeOutCubic' }
  );

  // Animation du texte de présentation et de la stack technique ensemble
  animateOnScroll(
    '.presentation-text, .stack-title, .tech-card',
    { opacity: [1, 0], translateY: [0, 50] },
    { duration: 1000, easing: 'easeOutCubic' },
    200 // stagger
  );
});
</script>


<template>
  <div class="flex flex-col gap-8 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-[8em]">
    <h1 class="text-5xl text-center font-normal text-primary-light dark:text-primary-dark sm:text-left">
      {{ $t('about_title') }}
    </h1>
    <!-- Section principale avec présentation -->
    <section class="about-section">
      <div class="about-grid">
        <div class="about-carousel ">
          <StackedCarousel :images="carouselImages"/>
        </div>
        <div class="about-text">
          <div class="flex flex-col gap-4 leading-[1.8]">
            <p class="font-light">{{ $t('about_intro') }}</p>
            <h3 class="text-lg font-normal text-primary-light dark:text-background-light">
              💡 {{ $t('about_motiveTitle') }}
            </h3>
              <p class="font-light">{{ $t('about_motive') }}</p>
              <p class="font-light">{{ $t('about_working') }}</p>
            <h3 class="text-lg font-normal text-primary-light dark:text-background-light">
              🌍 {{$t('about_outsideTitle') }}
            </h3>
              <p class="font-light">{{ $t('about_outside') }}</p>
          </div>
        </div>
      </div>
    </section>

    <div class="flex justify-between max-xl:flex-col max-xl:items-center max-xl:gap-[6rem]"  >
      <div class="flex-1 flex-col gap-2 max-w-[38vw] max-xl:max-w-full">
        <h2 class="text-xl text-primary-light dark:text-primary-dark mb-6 text-center">
          {{ $t('stack_title') }}
        </h2>
        <div>
          <AnimatedTooltip :items="technologies" />
        </div>
      </div>
      <div>
        <h2 class="text-xl text-primary-light dark:text-primary-dark mb-6">
          🗺️ {{ $t('location_title') }}
        </h2>
        <Globe class="-mt-16"/>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.p-tooltip .p-tooltip-text {
  --text-color: #003049;
  color: #003049;
  border: 1px solid var(--secondary-dark) !important;
}

@media (min-width: 1295px) {
  .flex-nowrap-custom {
    flex-wrap: nowrap;
  }
}

html.dark .p-tooltip .p-tooltip-text {
  --text-color: #FAF8F0;
  color: #FAF8F0;
  border: 1px solid var(--secondary-dark) !important;
}

.group:hover {
  box-shadow: 0 0 20px rgba(var(--secondary-light-rgb), 0.1);
}

.dark .group:hover {
  box-shadow: 0 0 20px rgba(var(--secondary-dark-rgb), 0.1);
}

.presentation-text ul li {
  @apply transition-all duration-300;
}

.presentation-text ul li:hover {
  @apply translate-x-2;
}

/* Styles pour la section des technologies */
.tech-section {
  @apply relative overflow-hidden;
}

.tech-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(var(--secondary-light-rgb), 0.05) 0%, transparent 70%);
  pointer-events: none;
  z-index: -1;
}

.dark .tech-section::before {
  background: radial-gradient(circle at 50% 50%, rgba(var(--secondary-dark-rgb), 0.05) 0%, transparent 70%);
}


/* Animation d'entrée pour les éléments */
.tech-section h2,
.tech-section p {
  @apply animate-fade-in;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

/* Effet de particules en arrière-plan */
.tech-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(var(--secondary-light-rgb), 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(var(--secondary-light-rgb), 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(var(--secondary-light-rgb), 0.05) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
  animation: float-particles 20s ease-in-out infinite;
}

.dark .tech-section::after {
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(var(--secondary-dark-rgb), 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(var(--secondary-dark-rgb), 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(var(--secondary-dark-rgb), 0.05) 0%, transparent 50%);
}

@keyframes float-particles {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(1deg);
  }
  66% {
    transform: translateY(10px) rotate(-1deg);
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .tech-section {
    @apply px-4;
  }
  
  .tech-section h2 {
    @apply text-2xl;
  }
  
  .tech-section p {
    @apply text-base;
  }
}

/* Amélioration des transitions globales */
.about-section,
.tech-section {
  @apply transition-all duration-700 ease-out;
}

/* Effet de focus pour l'accessibilité */
.tech-section:focus-within {
  @apply outline-none;
}

/* Optimisation des performances */
.tech-section * {
  @apply will-change-auto;
}

.tech-section:hover * {
  @apply will-change-transform;
}

.about-section {
  width: 100%;
  padding: 2rem 0;
}

.about-grid {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.about-carousel {
  display: flex;
  justify-content: space-between;
}

.about-text {
  flex: 1 1 0;
}

@media (max-width: 1024px) {
  .about-grid {
    flex-direction: column;
    gap: 2rem;
    align-items: stretch;
  }
  .about-text {
    max-width: 100%;
  }
  .about-carousel {
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
  }
}
</style>
