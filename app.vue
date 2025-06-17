<template>
  <div class="bg-background-light dark:bg-background-dark">
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
      content: 'Portfolio - Marie-Claire Lambo - Développeuse front-end'
    }
  ],
  htmlAttrs: {
    lang: 'fr'
  }
})
</script>