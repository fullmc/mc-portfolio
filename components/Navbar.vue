<script setup lang="ts">
import { SunIcon } from "@heroicons/vue/24/outline";
import { MoonIcon } from "@heroicons/vue/24/solid";

const route = useRoute();
const colorMode = useColorMode();
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();
const isMenuOpen = ref(false);

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

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <div class="fixed w-full top-0 z-50 bg-background-light dark:bg-background-dark dark:text-primary-dark text-primary-light flex justify-between items-center border-b-2 border-secondary-light dark:border-secondary-dark px-[8rem] py-4">
    <button @click="scrollToSection('home')">
      <div class="flex items-center justify-center">
        <img src="/mcmoji.png" alt="logo" class="w-12" />
      </div>
    </button>
    <div class="flex justify-between items-center gap-[4em] text-lg tracking-wider">
      <div class="flex gap-[4em]">
        <button @click="scrollToSection('projects')" class="hover:text-xl transition-all duration-300 uppercase tracking-wider">{{ $t('projects_link') }}</button>
        <button @click="scrollToSection('contact')" class="hover:text-xl transition-all duration-300 uppercase tracking-wider">{{ $t('contact_link') }}</button>
      </div>
      <div class="flex items-center">
        <button @click="toggleMode">
          <MoonIcon v-if="colorMode.value === 'light'" class="w-6 h-6" />
          <SunIcon v-else class="w-6 h-6" />
        </button>
        <span><img src="/line.svg" alt="fr" class="w-6 h-6 dark:invert" /></span>
        <button @click="switchLanguage">
          <img :src="locale === 'fr' ? '/france.png' : '/uk.png'" :alt="locale === 'fr' ? 'fr' : 'en'" class="w-6 h-6" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideDown {
  animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
