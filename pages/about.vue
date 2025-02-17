<script setup>
// import Button from 'primevue/button';
import { Button } from '@/components/ui/button'
import Tooltip from 'primevue/tooltip';
import { ref } from 'vue';
import 'primeicons/primeicons.css';

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
</script>


<template>
  <div class="h-screen bg-background-light dark:bg-background-dark text-primary-light dark:text-primary-dark flex flex-col justify-center">
    <h1 class="text-[84px] font-extrabold text-secondary-light dark:text-secondary-dark">à propos..</h1>
    <div class="flex items-center">
      <div class="flex flex-col gap-12 -mt-[100px] w-1/2 text-[24px] font-light leading-[36px] text-primary-light dark:text-primary-dark">
        <p class="">Je donne vie à des interfaces web claires et fonctionnelles. <br/>
          Ce que j'aime, c'est transformer des idées en expériences utilisateur efficaces et agréables. <br/>
          J'accorde une attention particulière à la performance, à l'esthétique et surtout à la simplicité d'utilisation.</p>
          
        <p>J'ai eu l'opportunité de travailler sur plusieurs projets, seule ou en alternance, grâce auxquels j'ai acquis des compétences en React, Vue.js et le développement de composants réutilisables.</p>
      </div>
    
      <div class="w-[400px] h-[600px] mx-auto flex flex-col">
        <div class="flex flex-col items-center gap-8">
          <p class="text-3xl mb-8 font-medium tracking-wide">Ma stack</p>
          <div class="flex flex-col gap-[4rem]">
            <div class="w-full flex flex-col items-center cursor-pointer" @click="showFront = !showFront">
              <Button variant="secondary" class="text-3xl font-medium py-6 px-8 dark:border dark:border-secondary-dark dark:bg-transparent"> Front-end </Button>
              <div v-if="showFront" class="flex gap-4 mt-4">
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
              <Button variant="secondary" class="text-2xl font-normal py-6 dark:border dark:border-secondary-dark dark:bg-transparent"> Back-end </Button>
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
              <Button variant="secondary" class="text-xl font-light dark:border dark:border-secondary-dark dark:bg-transparent"> Others </Button>
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


