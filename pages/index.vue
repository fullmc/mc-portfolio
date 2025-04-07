<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
  const tl = gsap.timeline();
  
  tl.from('.hello', {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  })
  .from('.title', {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "elastic.out(1, 0.8)",
    stagger: 0.2
  }, "-=0.5")
  .from('.location', {
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  }, "-=0.7")
  .from('.cv-button', {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)"
  }, "-=0.5")
  .from('.profile-pic', {
    x: 100,
    rotation: 10,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out"
  }, "-=1");
});
</script>

<template>
  <div class="flex flex-col gap-6 justify-center">
    <div class="flex items-center justify-between">
      <div class="flex flex-col gap-6 pt-[12rem]">
        <h1 class="hello text-[28px] font-normal text-primary-light dark:text-primary-dark">
          Coucou 👋🏾 Je suis Marie-Claire,
        </h1>
        <div class="flex flex-col gap-8">
          <span class="title text-[90px] font-extrabold leading-none tracking-wide text-primary-light dark:text-primary-dark">
            Développeuse
          </span>
          <span class="title text-[90px] font-extrabold leading-none tracking-wide text-primary-light dark:text-primary-dark">
            front-end
          </span>
        </div>
        <p class="location text-[24px] font-normal text-primary-light dark:text-primary-dark">
          📍 Paris, France / 🌍 Remote
        </p>
        <div class="cv-button">
          <button class="px-4 py-2 rounded-lg border border-primary-light text-primary-light dark:text-primary-dark dark:border-secondary-dark hover:scale-105 transition-transform">
            Télécharger mon CV
          </button>
        </div>
      </div>
      <div class="profile-pic">
        <img src="../public/dark-pic.svg" alt="profile" class="hidden dark:block">
        <img src="../public/light-pic.svg" alt="profile" class="block dark:hidden">
      </div>
    </div>
  </div>
</template>