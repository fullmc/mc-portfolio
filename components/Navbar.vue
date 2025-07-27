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
  <div class="fixed w-full top-0 z-50 bg-background-light dark:bg-background-dark dark:text-primary-dark text-primary-light flex justify-between items-center border-b-2 border-secondary-light dark:border-secondary-dark md:px-[8rem] px-[2rem] py-4">
    <button @click="scrollToSection('home')">
      <div class="flex items-center justify-center">
        <img src="/mcmoji.png" alt="logo" class="w-12" />
      </div>
    </button>
    <!-- Menu principal desktop -->
    <div class="hidden sm:flex justify-between items-center gap-[4em] text-lg tracking-wider">
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
          <p class="">{{ locale === 'fr' ? 'FR' : 'EN' }}</p>
        </button>
      </div>
    </div>
    <!-- Burger menu bouton mobile -->
    <button @click="toggleMenu" class="sm:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none">
      <template v-if="!isMenuOpen">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </template>
      <template v-else>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </template>
    </button>
    <!-- Menu mobile déroulant -->
    <transition name="mobile-slide">
      <div v-if="isMenuOpen" class="sm:hidden absolute top-full left-0 w-full bg-background-light dark:bg-background-dark flex flex-col items-center pb-6 gap-6 shadow-lg z-50">
        <button @click="() => { scrollToSection('projects'); toggleMenu(); }" class="uppercase tracking-wider text-lg hover:font-semibold">{{ $t('projects_link') }}</button>
        <button @click="() => { scrollToSection('contact'); toggleMenu(); }" class="uppercase tracking-wider text-lg hover:font-semibold">{{ $t('contact_link') }}</button>
        <div class="flex items-center gap-4 mt-2">
          <button @click="toggleMode">
            <MoonIcon v-if="colorMode.value === 'light'" class="w-6 h-6" />
            <SunIcon v-else class="w-6 h-6" />
          </button>
          <span><img src="/line.svg" alt="fr" class="w-6 h-6 dark:invert" /></span>
          <button @click="switchLanguage">
            <p class="">{{ locale === 'fr' ? 'FR' : 'EN' }}</p>
          </button>
        </div>
      </div>
    </transition>
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

/* Animation menu mobile slide (ouvre vers le bas, ferme vers le haut) */
.mobile-slide-enter-active,
.mobile-slide-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.mobile-slide-enter-from {
  opacity: 0;
  transform: translateY(-40px);
}
.mobile-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.mobile-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.mobile-slide-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}
</style>
