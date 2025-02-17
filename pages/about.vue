<script setup>
// import Button from 'primevue/button';
import { Button } from '@/components/ui/button'
import Tooltip from 'primevue/tooltip';
import { ref, onMounted } from 'vue';
import 'primeicons/primeicons.css';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Ajout de la directive Tooltip
const vTooltip = Tooltip;

const front_technologies = ref([
  { name: 'Vue', icon: '', image: '/vuejs.svg' },
  { name: 'React', icon: '', image: '/react.svg' },
  { name: 'JavaScript', icon: '', image: '/js.svg' },
  { name: 'TypeScript', icon: '', image: '/typescript.svg' },
  { name: 'Tailwind', icon: '', image: '/tailwind.svg' },
  { name: 'Next', icon: '', image: '/nextjs.svg' },
  { name: 'Nuxt', icon: '', image: '/nuxt.svg' },
]); 

const back_technologies = ref([
  { name: 'Express', icon: '', image: '/express.svg' },
  { name: 'Node', icon: '', image: '/node.svg' },
  { name: 'SQLite', icon: '', image: '/sqlite.svg' },
  { name: 'Prisma', icon: '', image: '/prisma.svg' },
]);

const other = ref([
  { name: 'Git', icon: '', image: '/git.svg' },
  { name: 'Figma', icon: '', image: '/figma.svg' },
  { name: 'VS Code', icon: '', image: '/vscode.svg' },
  { name: 'Cursor', icon: '', image: '/cursor.svg' },
  { name: 'Jira', icon: '', image: '/jira.svg' },
]);

const showFront = ref(false);
const showBack = ref(false);
const showOther = ref(false);

// Enregistrer le plugin TextPlugin
gsap.registerPlugin(TextPlugin);

onMounted(() => {
  gsap.to('.typing-title', {
    duration: 2,
    text: 'à propos..',
    ease: "power1.inOut",
    delay: 0.8,
    repeat: 0,
    yoyo: false,
    repeatDelay: 1
  });

  // Animation du texte de présentation
  gsap.from('.presentation-text', {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    delay: 2
  });

  // Animation du titre "ma stack" et des boutons
  gsap.from('.stack-title, .stack-button', {
    duration: 0.8,
    scale: 0.5,
    opacity: 0,
    stagger: 0.2,
    delay: 2.5,
    ease: "back.out(1.7)"
  });
});
</script>


<template>
  <div class="min-h-screen bg-background-light dark:bg-background-dark text-primary-light dark:text-primary-dark flex flex-col p-8">
    <div class="mt-[100px] lg:mt-[150px]">
      <h1 class="typing-title text-[64px] md:text-[84px] sm:text-[48px] font-extrabold text-secondary-light dark:text-secondary-dark min-h-[130px] sm:min-h-[100px]"></h1>
      
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-0 mt-8">
        <div class="flex flex-col gap-12 lg:-mt-[10px] w-full lg:w-1/2 text-[24px] md:text-[20px] sm:text-[18px] font-light leading-[36px] text-primary-light dark:text-primary-dark">
          <p class="presentation-text">Je donne vie à des interfaces web claires et fonctionnelles. <br/>
            Ce que j'aime, c'est transformer des idées en expériences utilisateur efficaces et agréables. <br/>
            J'accorde une attention particulière à la performance, à l'esthétique et surtout à la simplicité d'utilisation.</p>
          <p class="presentation-text">J'ai eu l'opportunité de travailler sur plusieurs projets, seule ou en alternance, grâce auxquels j'ai acquis des compétences en React, Vue.js et le développement de composants réutilisables.</p>
        </div>
      
        <div class="w-full lg:w-[400px] mx-auto flex flex-col">
          <h2 class="stack-title text-4xl md:text-3xl sm:text-2xl font-medium mb-12 text-center">Stack technique</h2>
          <div class="flex flex-col items-center gap-[5rem] md:gap-[3rem]">
            <div class="w-full flex flex-col items-center cursor-pointer" @click="showFront = !showFront">
              <Button variant="secondary" class="stack-button text-3xl font-medium py-6 px-8 dark:border dark:border-secondary-dark dark:bg-transparent"> Front-end </Button>
              <div v-if="showFront" class="flex gap-4 mt-4 flex-wrap">
                <div v-for="tech in front_technologies" :key="tech.name">
                  <img 
                    :src="tech.image" 
                    :alt="tech.name" 
                    class="w-8 h-8 cursor-pointer transition-transform hover:scale-110"
                    v-tooltip.bottom="tech.name"
                  />
                </div>
              </div>
            </div>

            <div class="w-full flex flex-col items-center cursor-pointer " @click="showBack = !showBack">
              <Button variant="secondary" class="stack-button text-2xl font-normal py-6 dark:border dark:border-secondary-dark dark:bg-transparent"> Back-end </Button>
              <div v-if="showBack" class="flex gap-4 mt-4">
                <div v-for="tech in back_technologies" :key="tech.name">
                  <img 
                    :src="tech.image" 
                    :alt="tech.name" 
                    class="w-8 h-8 cursor-pointer transition-transform hover:scale-110"
                    v-tooltip.bottom="tech.name"
                  />
                </div>
              </div>
            </div>

            <div class="w-full flex flex-col items-center cursor-pointer" @click="showOther = !showOther">
              <Button variant="secondary" class="stack-button text-lg font-light dark:border dark:border-secondary-dark dark:bg-transparent"> Autres </Button>
              <div v-if="showOther" class="flex gap-4 mt-4">
                <div v-for="tech in other" :key="tech.name">
                  <img 
                    :src="tech.image" 
                    :alt="tech.name" 
                    class="w-8 h-8 cursor-pointer transition-transform hover:scale-110"
                    v-tooltip.bottom="tech.name"
                  />
                </div>
              </div>
            </div>
          </div>
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

html.dark .p-tooltip .p-tooltip-text {
  --text-color: #FAF8F0;
  color: #FAF8F0;
  border: 1px solid var(--secondary-dark) !important;
}
</style>


