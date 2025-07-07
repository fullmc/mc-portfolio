<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { animateOnScroll } from '@/utils/scroll-animate'
import AnimatedGradientText from '@/components/AnimatedGradientText.vue'
import type { IProject } from '@/types/projects'
import { cn } from '@/lib/utils'

import { useColorMode } from '#imports'

const colorMode = useColorMode()

const projects = ref<IProject[]>([
  {
    title: "Orbital",
    descriptionKey: "orbital_desc",
    tasksKey: "orbital_tasks",
    frontTech: [
      { name: "ThreeJS", icon: "/treejs-dark.svg", iconDark: "/treejs-light.svg" },
      { name: "HTML", icon: "/html.svg" },
      { name: "CSS", icon: "/css.svg" },
      { name: "JavaScript", icon: "/js-light.svg" },
    ],
    backTech: [],
    link: "https://threenception.vercel.app/"
  },
  {
    title: "EnigmaQuest",
    descriptionKey: "enigmaquest_desc",
    tasksKey: "enigmaquest_tasks",
    frontTech: [
      { name: "VueJS", icon: "/vuejs.svg" },
      { name: "Express", icon: "/express.svg" },
      { name: "Socket.io", icon: "/socketio-dark.svg", iconDark: "/socketio-light.svg" },

    ],
    backTech: [
      { name: "NodeJS", icon: "/node.svg", iconDark: "/node-dark.svg" },
    ],
    link: "https://socketgame.vercel.app/"
  },
  {
    title: "Vortex",
    descriptionKey: "vortex_desc",
    tasksKey: "vortex_tasks",
    frontTech: [
      { name: "React", icon: "/react.svg" },
      { name: "TailwindCSS", icon: "/tailwind.svg" },
      { name: "NextJS", icon: "/nextjs.svg" },
    ],
    backTech: [
      { name: "Prisma", icon: "/prisma.svg", iconDark: "/prisma-dark.svg" },    
      { name: "SQLite", icon: "/sqlite.svg" },
    ],
    link: "https://github.com/fullmc/vortex"
  },
  {
    title: "Pokedex",
    descriptionKey: "pokedex_desc",
    tasksKey: "pokedex_tasks",
    frontTech: [
      { name: "VueJS", icon: "/vuejs.svg" },

    ],
    backTech: [],
    link: "https://pokeproject-six.vercel.app/#/"
  },
  {
    title: "WeatherApp",
    descriptionKey: "weatherapp_desc",
    tasksKey: "weatherapp_tasks",
    frontTech: [
      { name: "HTML", icon: "/html.svg" },
      { name: "CSS", icon: "/css.svg" },
      { name: "JavaScript", icon: "/js-light.svg" },
    ],
    backTech: [],
    link: "https://github.com/fullmc/weather-app"
  },
  {
    title: "Call me maybe",
    descriptionKey: "phonesystem_desc",
    tasksKey: "phonesystem_tasks",
    frontTech: [
      { name: "VueJS", icon: "/vuejs.svg" },
    ],
    backTech: [],
    link: "https://github.com/fullmc/vue-telephone"
  },
])

onMounted(async () => {
  const Velocity = (await import('velocity-animate')).default;
  if (typeof window === 'undefined') return;

  animateOnScroll(
    '.projects-title',
    { translateY: [0, 100], opacity: [1, 0] },
    { duration: 1000, easing: 'easeOutCubic' }
  );

});
</script>
<template>
  <div class="relative w-full overflow-hidden rounded-t-[100%] bg-[#D6CBB9] dark:border-2 dark:border-secondary-dark dark:bg-transparent pt-[10%] pb-[10%]">
    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 class="projects-title text-6xl font-normal text-primary-dark pb-[6%] -mt-[6%] text-center">
        {{ $t('my_projects') }}
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12 pt-12">
        <div v-for="(project, index) in projects" 
            :key="index" 
            class="project-card bg-primary-dark/40 dark:bg-background-dark p-6 rounded-2xl border border-gray-200 dark:border-white/20 flex flex-col justify-between h-[300px]">
          <div>
            <div class="flex items-center justify-between mb-4">
              <AnimatedGradientText>
                <h3
                  :class="cn(
                    `inline animate-gradient bg-gradient-to-r from-[#E87B35] via-[#C54269] to-[#E87B35] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                  )" class="text-2xl font-semibold"
                >
                  {{ project.title }}
                </h3>
              </AnimatedGradientText>
              <a v-if="project.link" :href="project.link" target="_blank" class="text-primary-dark">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <p class="text-lg text-[#877b68] dark:text-primary-dark mb-1">{{ $t(project.descriptionKey) }}</p>
            <p class="text-sm text-[#877b68] dark:text-primary-dark italic">{{ $t(project.tasksKey) }}</p>
          </div>
          <div class="mt-4">
            <div v-if="project.frontTech.length > 0" class="flex items-center mb-2">
              <span class="text-sm font-medium text-[#877b68] dark:text-primary-dark w-16">Front:</span>
              <div class="flex gap-3">
                <img v-for="tech in project.frontTech" :key="tech.name" 
                  :src="colorMode.value === 'dark' && tech.iconDark ? tech.iconDark : tech.icon" 
                  :alt="tech.name" class="h-5 w-5" />
              </div>
            </div>
            <div v-if="project.backTech.length > 0" class="flex items-center">
              <span class="text-sm font-medium text-[#877b68] dark:text-primary-dark w-16">Back:</span>
              <div class="flex gap-3">
                <img v-for="tech in project.backTech" :key="tech.name" 
                  :src="colorMode.value === 'dark' && tech.iconDark ? tech.iconDark : tech.icon" 
                  :alt="tech.name" class="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.project-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  transition: left 0.5s;
}

.project-card:hover {
  transform: translateY(-8px) scale(1.05);
  border-color: #E87B35;
  box-shadow: 
    0 1px 32px rgba(250, 248, 240, 0.5),
    inset 0 0 1px #E87B35;
}

.dark .project-card:hover {
  border-color: #E87B35;
  box-shadow: 
    0 1px 32px rgba(232, 123, 53, 0.3),
    inset 0 0 1px #E87B35;
}

.project-card:hover::before {
  left: 100%;
}

.project-card:hover h3 {
  background-size: 200% 100%;
  animation: shimmer 2s ease-in-out infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Animation de l'icône de lien */
.project-card:hover svg {
  transform: rotate(45deg) scale(1.1);
  transition: all 0.3s ease;
}
</style>
