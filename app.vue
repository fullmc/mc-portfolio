<template>
  <div class="bg-background-light dark:bg-background-dark h-screen">
    <h1>Hello World</h1>
    <button @click="toggleMode" class="bg-black text-white p-2 rounded-md dark:bg-white dark:text-black" >Toggle Mode</button>
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();
const toggleMode = () => {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light';
};
</script>