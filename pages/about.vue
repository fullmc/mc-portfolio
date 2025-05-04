<script setup>
import Tooltip from 'primevue/tooltip';
import { ref, onMounted } from 'vue';
import 'primeicons/primeicons.css';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Technologies3D from '@/components/Technologies3D.vue';

// Ajout de la directive Tooltip
const vTooltip = Tooltip;

const technologies = ref([
  { name: 'Vue', icon: '', image: '/vuejs.svg' },
  { name: 'React', icon: '', image: '/react.png' },
  { name: 'JavaScript', icon: '', image: '/js.svg' },
  { name: 'TypeScript', icon: '', image: '/typescript.svg' },
  { name: 'Tailwind', icon: '', image: '/tailwind.png' },
  { name: 'Next', icon: '', image: '/next.png' },
  { name: 'Nuxt', icon: '', image: '/nuxt.png' },
  { name: 'Express', icon: '', image: '/express.webp' },
  { name: 'Node', icon: '', image: '/node.svg' },
  { name: 'SQLite', icon: '', image: '/sqlite.svg' },
  { name: 'Prisma', icon: '', image: '/prisma.svg' },
  { name: 'Git', icon: '', image: '/git.png' },
  { name: 'Figma', icon: '', image: '/figma.webp' },
  { name: 'VS Code', icon: '', image: '/vscode.svg' },
  { name: 'Cursor', icon: '', image: '/cursor.png' },
  { name: 'Jira', icon: '', image: '/jira.svg' },
]);

// Enregistrer le plugin TextPlugin
gsap.registerPlugin(TextPlugin);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  // Animation des lettres du titre
  const titleChars = document.querySelectorAll('.split-char');
  gsap.from(titleChars, {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.05,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: '.typing-title',
      start: 'top center',
      toggleActions: 'play none none reverse'
    }
  });

  // Autres animations
  const section = document.querySelector('.about-section');
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: 'top center',
      toggleActions: 'play none none reverse'
    }
  });

  // Animation du texte de présentation et de la stack technique ensemble
  gsap.from('.presentation-text, .stack-title, .tech-card', {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    delay: 0.1,
    ease: "power2.out"
  });
});
</script>


<template>
  <div
    class="mt-8 bg-background-light dark:bg-background-dark flex flex-col justify-center ">
    <div>
      <h1 class="typing-title text-[74px] font-normal text-secondary-light dark:text-secondary-dark pb-4">
        {{ $t('about_title') }}
      </h1>
      <div class="flex items-center justify-between flex-wrap flex-nowrap-custom">
        <div class="flex-col">
          <div class="gap-8 text-base font-light leading-[1.8] text-primary-light dark:text-primary-dark">
            <div class="presentation-text space-y-10 mr-32">
              <div>
                <p>{{ $t('about_intro') }}</p>
              </div>

              <div class="space-y-4">
                <h3 class="text-lg font-normal text-primary-light dark:text-background-light">💡 {{ $t('about_motiveTitle') }}</h3>
                <div class="space-y-2">
                  <p>{{ $t('about_motive') }}</p>
                  <p>{{ $t('about_working') }}</p>
                </div>
              </div>

              <div class="space-y-4">
                <h3 class="text-lg font-normal text-primary-light dark:text-background-light">🌍 {{ $t('about_outsideTitle') }}</h3>
                <div class="space-y-2">
                  <p>{{ $t('about_outside') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-3/5 mx-auto flex flex-col lg:ml-12 mt-12 lg:mt-0">
          <Technologies3D :technologies="technologies" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
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
</style>
