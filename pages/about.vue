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
  <div class="flex flex-col mx-[8rem]">
    <h1 class="text-5xl text-left font-normal text-primary-light dark:text-primary-dark">
      {{ $t('about_title') }}
    </h1>
    <!-- Section principale avec présentation -->
     <div class="flex flex-col gap-6">
      <section class="flex flex-col gap-8 m-[2rem] xl:flex-row xl:mx-0">
        <div class="m-auto">
          <StackedCarousel :images="carouselImages"/>
        </div>
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
        <div class="flex flex-col gap-2 items-center">
          <h2 class="text-xl text-primary-light dark:text-primary-dark">
            🗺️ {{ $t('location_title') }}
          </h2>
          <Globe class="-mt-16 pl-16"/>
        </div>
      </div>
    </div>
  </div>
</template>