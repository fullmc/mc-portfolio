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

</script>
<template>
  <div class="h-screen flex flex-col">
    <div class="w-full">
      <h1 class="text-5xl text-left font-normal text-primary-light dark:text-primary-dark mb-8">
        {{ $t('my_projects') }}
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in projects" 
          :key="index" 
          class="project-card bg-primary-dark/40 dark:bg-background-dark p-6 rounded-2xl border border-gray-200 dark:border-white/20 flex flex-col justify-between h-[300px] relative">
          <p class="text-2xl text-left font-normal text-primary-light dark:text-primary-dark absolute bottom-6 left-4">
            {{ project.title }}
          </p>
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
