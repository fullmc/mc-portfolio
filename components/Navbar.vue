<script setup lang="ts">
import { SunIcon } from "@heroicons/vue/24/outline";
import { MoonIcon } from "@heroicons/vue/24/solid";

const route = useRoute();
const colorMode = useColorMode();
const { locale, t } = useI18n();
const localePath = useLocalePath();

const toggleMode = () => {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light';
};

const switchLanguage = () => {
  locale.value = locale.value === 'en' ? 'fr' : 'en';
};

// link en gras 
const isActive = (path: string) => {
  return localePath(path) === route.path;
};

</script>

<template>
  <div class="bg-background-light dark:bg-background-dark dark:text-primary-dark text-primary-light flex justify-between items-center">
    <NuxtLink to="/">
      <h1>MC LAMBO</h1>
    </NuxtLink>
    <div class="flex gap-24">
      <NuxtLink :to="localePath('about')" :class="{ 'font-bold': isActive('about') }">{{ t('À propos') }}</NuxtLink>
      <NuxtLink :to="localePath('projects')" :class="{ 'font-bold': isActive('projects') }">{{ t('Mes projets') }}</NuxtLink>
      <NuxtLink :to="localePath('contact')" :class="{ 'font-bold': isActive('contact') }">{{ t('Contact') }}</NuxtLink>
    </div>
    <div class="flex gap-4 items-center">
      <button @click="toggleMode">
        <MoonIcon v-if="colorMode.value === 'light'" class="w-6 h-6" />
        <SunIcon v-else class="w-6 h-6" />
      </button>
      <span><img src="/line.svg" alt="fr" class="w-6 h-6 dark:invert" /></span>
      <button @click="switchLanguage">{{ locale.toUpperCase() }}</button>
    </div>
  </div>
</template>
