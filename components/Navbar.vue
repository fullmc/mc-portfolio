<script setup lang="ts">
import { SunIcon } from "@heroicons/vue/24/outline";
import { MoonIcon } from "@heroicons/vue/24/solid";

const route = useRoute();
const colorMode = useColorMode();
const localePath = useLocalePath();
const { locales, locale, setLocale } = useI18n();

const toggleMode = () => {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light';
};

const switchLanguage = () => {
  const newLocale = locale.value === 'fr' ? 'en' : 'fr';
  setLocale(newLocale);
};

const isActive = (path: string) => {
  return {
    active: localePath(path) === route.path,
    style: localePath(path) === route.path ? 'font-medium' : 'font-light'
  };
};

</script>

<template>

  <div class=" dark:text-primary-dark text-primary-light flex justify-between items-center">
    <NuxtLink to="/">
      <div class="border-b border-primary-light dark:border-primary-dark flex items-center justify-center">
        <img src="/mcmoji.png" alt="logo" class="w-12" />
      </div>
      <p class="text-xs font-thin pt-1">MC LAMBO</p>
    </NuxtLink>
    <div
      class="flex gap-[8em] rounded-full border border-secondary-dark dark:border-secondary-light px-[6em] py-4 text-lg tracking-wider">
      <NuxtLink :to="localePath('about')" :class="[
        'hover:text-xl transition-all duration-300',
        isActive('about').style
      ]">{{ $t('about_link') }}</NuxtLink>
      <NuxtLink :to="localePath('projects')" :class="[
        'hover:text-xl transition-all duration-300',
        isActive('projects').style
      ]">{{ $t('projects_link') }}</NuxtLink>
      <NuxtLink :to="localePath('contact')" :class="[
        'hover:text-xl transition-all duration-300',
        isActive('contact').style
      ]">{{ $t('contact_link') }}</NuxtLink>
    </div>
    <div class="flex gap-4 items-center">
      <button name="toggleMode" aria-label="Toggle mode" @click="toggleMode">
        <MoonIcon v-if="colorMode.value === 'light'" class="w-6 h-6" />
        <SunIcon v-else class="w-6 h-6" />
      </button>
      <span><img src="/line.svg" alt="fr" class="w-6 h-6 dark:invert" /></span>
      <button name="switchLanguage" aria-label="Switch language" @click="switchLanguage">
        <img :src="locale === 'fr' ? '/france.png' : '/uk.png'" :alt="locale === 'fr' ? 'fr' : 'en'" class="w-6 h-6" />
      </button>
    </div>
  </div>
</template>
