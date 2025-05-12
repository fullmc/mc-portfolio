<template>
  <title>Portfolio - Marie-CLaire</title>
  <div class="bg-background-light dark:bg-background-dark min-h-screen px-16 py-8">
    <Navbar />
    <div>
      <NuxtPage />
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Portfolio - Marie-CLaire',
  meta: [
    {
      name: 'description',
      content: 'Portfolio - Marie-CLaire'
    }
  ],
  htmlAttrs: {
    lang: 'fr'
  }
})
</script>