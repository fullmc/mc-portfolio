<script setup lang="ts">
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import Projects from './projects.vue';
import About from './about.vue';

const { locale } = useI18n();

// const downloadCV = () => {
//   const link = document.createElement('a');
//   const cvFileName = locale.value === 'fr' ? 'cv-fr.pdf' : 'cv-en.pdf';
//   link.href = `/${cvFileName}`;
//   link.download = cvFileName;
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);  
// };

onMounted(async () => {
  const Velocity = (await import('velocity-animate')).default;
  if (typeof window === 'undefined') return;


  Velocity(document.querySelector('.hello'), {
    translateY: [-0, -50],
    opacity: [1, 0]
  }, {
    duration: 1000,
    easing: "easeOutCubic"
  });

  // Animation title
  Velocity(document.querySelector('.title'), {
    translateY: [0, 100],
    opacity: [1, 0]
  }, {
    duration: 1200,
    easing: "easeOutElastic",
    delay: 0
  });

  // Animation profile-pic (lancée en même temps)
  Velocity(document.querySelector('.profile-pic'), {
    translateX: [0, 100],
    rotateZ: [0, 10],
    opacity: [1, 0]
  }, {
    duration: 1200,
    easing: "easeOutCubic"
  });
});
</script>

<template>
  <div class="flex flex-col gap-6 justify-center min-h-screen">
    <div class="flex items-center justify-between mx-[8em] h-screen">
      <div class="flex flex-col gap-6">
        <div class="flex flex-col">
          <span class="title text-[90px] font-bold leading-tight tracking-wide text-primary-light dark:text-primary-dark whitespace-pre-line">
            {{ $t('home_id') }}
          </span>
          <h1 class="hello text-2xl font-light text-primary-light dark:text-primary-dark">
            {{ $t('home_dev') }}
          </h1>
        </div>
      </div>
      <div class="profile-pic mt-8 md:mt-0">
        <img src="../public/dark-pic.svg" alt="profile" class="hidden dark:block w-[200px] md:w-auto">
        <img src="../public/light-pic.svg" alt="profile" class="block dark:hidden w-[200px] md:w-auto">
      </div>
    </div>

    <!-- Section Projets -->
    <div class="h-screen">
      <Projects />
    </div>

    <!-- Section A propos -->
    <div class="h-screen">
      <About />
    </div>
  </div>
</template>