<script setup>
import Tooltip from 'primevue/tooltip';
import { ref, onMounted } from 'vue';
import 'primeicons/primeicons.css';
import Technologies3D from '@/components/Technologies3D.vue';
import { animateOnScroll } from '@/utils/scroll-animate';
import AnimatedTooltip from '@/components/AnimatedTooltip.vue';

// Ajout de la directive Tooltip
const vTooltip = Tooltip;

const technologies = ref([
  { name: 'Vue.js', designation: 'Framework Frontend', image: '/vuejs.svg', id: 1 },
  { name: 'React', designation: 'Bibliothèque UI', image: '/react.png', id: 2 },
  { name: 'JavaScript', designation: 'Langage de programmation', image: '/js.svg', id: 3 },
  { name: 'TypeScript', designation: 'JavaScript typé', image: '/typescript.svg', id: 4 },
  { name: 'Tailwind CSS', designation: 'Framework CSS', image: '/tailwind.png', id: 5 },
  { name: 'Next.js', designation: 'Framework React', image: '/next.png', id: 6 },
  { name: 'Nuxt.js', designation: 'Framework Vue', image: '/nuxt.png', id: 7 },
  { name: 'Express.js', designation: 'Framework Node.js', image: '/express.webp', id: 8 },
  { name: 'Node.js', designation: 'Runtime JavaScript', image: '/node.svg', id: 9 },
  { name: 'SQLite', designation: 'Base de données', image: '/sqlite.svg', id: 10 },
  { name: 'Prisma', designation: 'ORM moderne', image: '/prisma.svg', id: 11 },
  { name: 'Git', designation: 'Contrôle de version', image: '/git.png', id: 12 },
  { name: 'Figma', designation: 'Design UI/UX', image: '/figma.webp', id: 13 },
  { name: 'VS Code', designation: 'Éditeur de code', image: '/vscode.svg', id: 14 },
  { name: 'Cursor', designation: 'IDE IA', image: '/cursor.png', id: 15 },
  { name: 'Jira', designation: 'Gestion de projet', image: '/jira.svg', id: 16 },
]);

onMounted(async () => {
  const Velocity = (await import('velocity-animate')).default;
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
  <div class="bg-background-light dark:bg-background-dark flex flex-col justify-center mx-[8em]">
    <div>
      <h1 class="typing-title text-[74px] font-normal text-secondary-light dark:text-secondary-dark pb-4">
        {{ $t('about_title') }}
      </h1>
      
      <!-- Section principale avec présentation -->
      <div class="about-section mb-16">
        <div class="flex items-center justify-between gap-16">
          <img src="/mcwttj.svg" alt="about" class="w-[400px] rounded-lg"/>  
          <div class="text-sm font-light leading-[1.8] text-primary-light dark:text-primary-dark">
            <div class="presentation-text text-justify  flex flex-col gap-4">
              <h3>{{ $t('about_intro') }}</h3>
              <h3 class="text-lg font-normal text-primary-light dark:text-background-light">
                💡 {{ $t('about_motiveTitle') }}
              </h3>
                <p>{{ $t('about_motive') }}</p>
                <p>{{ $t('about_working') }}</p>
              <h3 class="text-lg font-normal text-primary-light dark:text-background-light">
                🌍 {{$t('about_outsideTitle') }}
              </h3>
                <p>{{ $t('about_outside') }}</p>
            </div>
          </div>
        </div>
      </div>


        <!-- Grille des technologies -->
        <h2 class="text-2xl text-primary-light dark:text-primary-dark mb-4">
          {{ $t('stack_title') }}
        </h2>
        <div class="tech-grid">
          <AnimatedTooltip :items="technologies" />
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

.tech-grid {
  @apply relative;
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
</style>
