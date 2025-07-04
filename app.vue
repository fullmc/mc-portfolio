<template>
  <div class="bg-background-light dark:bg-background-dark">
    <Navbar />
    <div>
      <NuxtPage />
    </div>
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()

// Forcer le mode clair immédiatement
colorMode.preference = 'light'
colorMode.value = 'light'

useHead({
  title: 'Marie-Claire Lambo',
  meta: [
    {
      name: 'description',
      content: 'Marie-Claire Lambo - Développeuse front-end'
    }
  ],
  htmlAttrs: {
    lang: 'fr'
  },
})
</script>