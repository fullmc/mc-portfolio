<script setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const downloadCV = () => {
  const link = document.createElement('a');
  const cvFileName = locale.value === 'fr' ? 'cv-fr.pdf' : 'cv-en.pdf';
  link.href = `/${cvFileName}`;
  link.download = cvFileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

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
  <div class="flex flex-col gap-6 justify-center">
    <div class="flex flex-col md:flex-row items-center md:items-end justify-between">
      <div class="flex flex-col gap-6 pt-8 md:pt-[12rem]">
        <h1 class="hello text-[20px] md:text-[28px] font-normal text-primary-light dark:text-primary-dark">
          {{ $t('home_hi') }}
        </h1>
        <div class="flex flex-col gap-8">
          <span
            class="title text-[40px] sm:text-[60px] md:text-[90px] font-extrabold leading-none tracking-wide text-primary-light dark:text-primary-dark whitespace-pre-line">
            {{ $t('home_dev') }}
          </span>
        </div>
        <p class="location text-lg md:text-xl font-normal text-primary-light dark:text-primary-dark">
          📍 Paris, France / 🌍 Remote
        </p>
        <div class="cv-button">
          <button name="downloadCV" aria-label="Download CV"
            class="px-4 py-2 rounded-lg border border-primary-light text-primary-light dark:text-primary-dark dark:border-secondary-dark hover:scale-105 transition-transform"
            @click="downloadCV">
            {{ $t('home_cv') }}
          </button>
        </div>
      </div>
      <div class="profile-pic mt-8 md:mt-0">
        <img src="../public/dark-pic.svg" alt="profile" class="hidden dark:block w-[200px] md:w-auto">
        <img src="../public/light-pic.svg" alt="profile" class="block dark:hidden w-[200px] md:w-auto">
      </div>
    </div>
  </div>
</template>