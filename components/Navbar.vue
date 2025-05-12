<script setup lang="ts">
import { SunIcon } from "@heroicons/vue/24/outline";
import { MoonIcon } from "@heroicons/vue/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const route = useRoute();
const colorMode = useColorMode();
const localePath = useLocalePath();
const { locales, locale, setLocale } = useI18n();
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
</script>

<template>
  <div class="dark:text-primary-dark text-primary-light">
    <div class="flex justify-between items-center">
      <NuxtLink to="/" class="flex flex-col items-center">
        <div class="border-b border-primary-light dark:border-primary-dark flex items-center justify-center">
          <img src="/mcmoji.png" alt="logo" class="w-8 md:w-12" />
        </div>
        <p class="text-xs font-thin pt-1">MC LAMBO</p>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <div
        class="hidden md:flex gap-[8em] rounded-full border border-secondary-dark dark:border-secondary-light px-[6em] py-4 text-lg tracking-wider">
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
          <MoonIcon v-if="colorMode.value === 'light'" class="w-5 md:w-6 h-5 md:h-6" />
          <SunIcon v-else class="w-5 md:w-6 h-5 md:h-6" />
        </button>
        <span><img src="/line.svg" alt="fr" class="w-5 md:w-6 h-5 md:h-6 dark:invert" /></span>
        <button name="switchLanguage" aria-label="Switch language" @click="switchLanguage">
          <img :src="locale === 'fr' ? '/france.png' : '/uk.png'" :alt="locale === 'fr' ? 'fr' : 'en'"
            class="w-5 md:w-6 h-5 md:h-6" />
        </button>
        <!-- Burger Menu Button -->
        <button @click="toggleMenu" class="md:hidden" aria-label="Toggle menu">
          <Bars3Icon class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="isMenuOpen"
      class="md:hidden fixed top-0 left-0 right-0 bg-background-light dark:bg-background-dark border-b border-secondary-dark dark:border-secondary-light z-50 animate-slideDown">
      <!-- Bouton de fermeture dans le menu mobile -->
      <div class="flex justify-end px-4 pt-4">
        <button @click="toggleMenu" aria-label="Fermer le menu">
          <XMarkIcon class="w-8 h-8" />
        </button>
      </div>
      <div class="flex flex-col items-center py-4 space-y-4">
        <NuxtLink :to="localePath('about')"
          :class="['hover:text-xl transition-all duration-300', isActive('about').style, 'transform transition-all duration-300 hover:scale-110']"
          @click="toggleMenu">
          {{ $t('about_link') }}
        </NuxtLink>
        <NuxtLink :to="localePath('projects')"
          :class="['hover:text-xl transition-all duration-300', isActive('projects').style, 'transform transition-all duration-300 hover:scale-110']"
          @click="toggleMenu">
          {{ $t('projects_link') }}
        </NuxtLink>
        <NuxtLink :to="localePath('contact')"
          :class="['hover:text-xl transition-all duration-300', isActive('contact').style, 'transform transition-all duration-300 hover:scale-110']"
          @click="toggleMenu">
          {{ $t('contact_link') }}
        </NuxtLink>
      </div>
    </div>

    <!-- Overlay -->
    <div v-if="isMenuOpen" class="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
      @click="toggleMenu">
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
