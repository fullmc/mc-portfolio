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
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: ''
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,200;10..48,300;10..48,400;10..48,500;10..48,600;10..48,700;10..48,800;10..48,900&display=swap'
    }
  ]
})
</script>