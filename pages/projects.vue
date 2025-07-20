<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { IProject } from '@/types/projects'

import { useColorMode } from '#imports'

const colorMode = useColorMode()

const projects = ref<IProject[]>([
  {
    title: "Orbital",
    descriptionKey: "orbital_desc",
    tasksKey: "orbital_tasks",
    image: "/orbital.webp",
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
    image: "/enigmaquest.webp",
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
    image: "/vortex.webp",
    frontTech: [
      { name: "React", icon: "/react.svg" },
      { name: "TailwindCSS", icon: "/tailwind.svg" },
      { name: "NextJS", icon: "/nextjs.svg" },
    ],
    backTech: [
      { name: "Prisma", icon: "/prisma.svg", iconDark: "/prisma-dark.svg" },    
      { name: "SQLite", icon: "/sqlite.svg" },
    ],
    link: "https://github.com/fullmc/next-booking"
  },
  {
    title: "Pokedex",
    descriptionKey: "pokedex_desc",
    tasksKey: "pokedex_tasks",
    image: "/pokemon.webp",
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
    image: "/weather.webp",
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
    image: "/phonecall.webp",
    frontTech: [
      { name: "VueJS", icon: "/vuejs.svg" },
    ],
    backTech: [],
    link: "https://github.com/fullmc/vue-telephone"
  },
])

</script>
<template>
  <div class="flex flex-col gap-2 mx-auto">
    <h1 class="text-5xl text-left font-normal text-primary-light dark:text-primary-dark mb-8">
      {{ $t('my_projects') }}
    </h1>
    <div class="grid place-items-center grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="project-card bg-primary-dark/40 dark:bg-background-dark p-6 rounded-2xl border border-gray-200 dark:border-white/20 flex flex-col justify-between h-[20vh] relative w-[40vw] group overflow-hidden"
      >
        <img :src="project.image" alt="project-placeholder" class="absolute bottom-0 right-0 w-full h-full object-cover z-0" />
        <div
          class="project-info absolute bottom-0 left-0 z-10 dark:bg-background-dark/80 px-6 shadow-lg transition-all duration-300 w-full group-hover:-translate-y-16 group-hover:shadow-2xl"
        >
          <p class="text-sm text-wrap font-medium tracking-wide text-primary-dark sm:text-xl sm:mb-2">{{ project.title }}</p>
          <p
            class="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-300 text-primary-dark text-sm"
          >
            {{ $t(project.descriptionKey) }}
          </p>
          <div v-if="project.frontTech"
            class="flex gap-2 mt-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-300"
          >
            <p class="text-sm text-primary-dark ">Front:</p>
            <img
              v-for="(tech, i) in project.frontTech"
              :key="i"
              :src="tech.iconDark ? tech.iconDark : tech.icon"
              :alt="tech.name"
              class="w-5 h-5"
            />
          </div>
          <div v-if="project.backTech.length > 0"
            class="flex gap-2 mt-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-300"
          >
            <p class="text-sm text-primary-dark">Back:</p>
            <img
              v-for="(tech, i) in project.backTech"
              :key="i"
              :src="tech.iconDark ? tech.iconDark : tech.icon"
              :alt="tech.name"
              class="w-4 h-4"
            />
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
  border-color: #D8CBB7;
  box-shadow: 
  0 1px 32px rgba(232, 123, 53, 0.3),
  inset 0 0 1px #E87B35;
}

.dark .project-card:hover {
  border-color: #475569;
  box-shadow: 
    0 1px 32px rgba(255, 255, 255, 0.2),
    inset 0 0 1px #475569;
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

.project-info {
  background: linear-gradient(to top, rgba(17, 24, 39, 0.4), transparent);
  padding-top: 1rem;
}
.group:hover .project-info {
  background: linear-gradient(to top, rgba(17, 24, 39, 0.8), transparent);
  transform: translateY(-0.1rem) scale(1.04);
  padding-bottom: 1rem;
}

@media (min-width: 1024px){
  .project-card {
    width: 24vw;
    height: 24vh;
  }
}
</style>
