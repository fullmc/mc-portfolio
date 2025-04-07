<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Project {
  title: string;
  description: string;
  media: {
    type: 'image' | 'video';
    url: string;
  };
  technologies: string[];
  link: string;
}

const projects = ref<Project[]>([
  {
    title: "Orbital",
    description: "Description du projet 1",
    media: {
      type: 'video',
      url: '/orbital.mp4'
    },
    technologies: ["ThreeJs", "HTML", "CSS", "JavaScript"],
    link: "https://threenception.vercel.app/"
  },
  {
    title: "EnigmaQuest",
    description: "Description du projet 1",
    media: {
      type: 'video',
      url: '/socketgame.mp4'
    },
    technologies: ["Socket.io", "VueJS", "ExpressJS", "NodeJS"],
    link: "https://github.com/fullmc/socket-game"
  },
  {
    title: "Vortex",
    description: "Description du projet 1",
    media: {
      type: 'video',
      url: '/next-booking.mov'
    },
    technologies: ["React", "Next", "Tailwind", "Prisma", "SQLite"],
    link: "https://github.com/fullmc/next-booking"
  },
  {
    title: "Pokedex",
    description: "Description du projet 2",
    media: {
      type: 'image',
      url: '/pokeproject.png'
    },
    technologies: ["Vue 2"],
    link: "https://pokeproject-six.vercel.app/#/"
  },
  {
    title: "Weather App",
    description: "Description du projet 2",
    media: {
      type: 'video',
      url: '/weather-app.mov'
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/fullmc/weather-app"
  },
  {
    title: "Phone system",
    description: "Description du projet 2",
    media: {
      type: 'video',
      url: '/vue-telephone.mov'
    },
    technologies: ["Vue 2"],
    link: "https://github.com/fullmc/vue-telephone"
  }
  // Ajoutez vos autres projets ici
])

onMounted(() => {
  // Animation du titre
  gsap.from(".projects-title", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
  })

  // Animation des cartes de projets
  gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      },
      y: 100,
      opacity: 0,
      duration: 1,
      delay: i * 0.2,
      ease: "power4.out"
    })
  })

  // Animation de parallaxe sur les images
  gsap.to(".project-card img", {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
      trigger: ".project-card",
      scrub: true
    }
  });
})
</script>
<template>
  <div>
    <h1 class="projects-title text-[74px] font-light text-primary-light dark:text-secondary-dark py-8">
      mes projets
    </h1>

    <div class="flex items-center flex-wrap gap-12">
      <div v-for="(project, index) in projects" 
        :key="index" 
        class="w-[600px]">
        <div class="relative overflow-hidden h-[300px] group rounded-2xl">
          <template v-if="project.media.type === 'video'">
            <video 
              :src="project.media.url"
              class="w-full h-fit object-cover rounded-2xl project-card group bg-gray-100 dark:bg-gray-800"
              autoplay
              loop
              muted
              playsinline
            />
          </template>
          <template v-else>
            <img 
              :src="project.media.url" 
              :alt="project.title"
              class="w-full h-fit object-cover rounded-2xl project-card group bg-gray-100 dark:bg-gray-800"
            >
          </template>
          
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <h3 class="text-2xl font-bold text-white mb-2">{{ project.title }}</h3>
            <div class="flex items-center gap-2 justify-between">
              <div class="flex gap-2 flex-wrap">
                <span v-for="tech in project.technologies" 
                  :key="tech"
                  class="px-3 py-1 bg-white/20 rounded-full text-sm text-white">
                  {{ tech }}
                </span>
              </div>
              <a :href="project.link" 
                target="_blank"
                class="inline-flex items-center text-white hover:font-bold dark:hover:text-secondary-dark">
                  Voir le projet
                <svg xmlns="http://www.w3.org/2000/svg" 
                  class="h-5 w-5 ml-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>