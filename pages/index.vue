<template>
  <div class="flex flex-col gap-6 justify-center min-h-screen">
    <div class="flex items-center justify-between">
      <div class="flex flex-col gap-6">
        <h1 class="text-[28px] font-normal text-primary-light dark:text-primary-dark">Coucou 👋🏾 Je suis Marie-Claire, </h1>
        <span class="text-[100px] font-extrabold leading-none tracking-wide text-primary-light dark:text-primary-dark">Développeuse <br/>front-end</span>
        <p class="text-[28px] font-normal text-primary-light dark:text-primary-dark">basée à Paris</p>
        <div>
          <button class="px-4 py-2 rounded-lg border border-primary-light text-primary-light dark:text-primary-dark dark:border-primary-dark">Télécharger mon CV</button>
        </div>
      </div>
      <div>
        <img src="../public/dark-pic.svg" alt="profile" class="hidden dark:block">
        <img src="../public/light-pic.svg" alt="profile" class="block dark:hidden">
      </div>
    </div>
  </div>
</template>