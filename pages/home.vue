<template>
  <section class="relative sm:min-h-screen flex flex-col items-center justify-center pt-[8rem] gap-6">
    <div class="text-orange-500 text-[1rem] w-fit bg-orange-500/10 px-4 py-2 rounded-xl">
      {{ $t('home_dev') }}
    </div>
    <h1 class="text-[8vw] tracking-[0.4vw] font-semibold z-10 text-center w-full">
      {{ $t('home_id') }}
    </h1>
    <!-- Section avec disposition horizontale -->
    <div class="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-start lg:mt-8 w-full lg:pl-[8rem] xl:pl-[12rem] pl-[4rem] pr-[4rem] flex-1">
      <!-- Metrics à gauche -->
      <div class="flex gap-6 justify-center z-10 items-center text-center mx-auto text-base max-w-[20rem] sm:items-start sm:mx-0 lg:flex-col lg:items-center lg:gap-6 lg:max-w-none flex-wrap sm:flex-nowrap">
        <div class="text-orange-500 flex flex-col items-center font-medium">3<span class="block font-normal text-primary-light dark:text-primary-dark ">{{ $t('years_experience') }}</span></div>
        <div class="text-orange-500 flex flex-col items-center font-medium">5+<span class="block font-normal text-primary-light dark:text-primary-dark">{{ $t('projects_completed') }}</span></div>
        <div class="text-orange-500 flex flex-col items-center font-medium">3+<span class="block font-normal text-primary-light dark:text-primary-dark">{{ $t('technologies') }}</span></div>
      </div>

      <!-- Blur gauche -->
      <img
        src="/blur.png"
        class="absolute right-[-10%] bottom-[-25%] w-[50vw] z-0 pointer-events-none select-none"
        alt="blur"
      />
      <!-- Blur rose droite -->
      <img
        src="/pink-blur.png"
        class="absolute -left-[14%] top-1/2 -translate-y-1/2 w-[60vw] z-0 pointer-events-none select-none"
        alt="pink blur"
      />

      <!-- Description à droite -->
      <div class="flex flex-col justify-center z-10 gap-4 w-auto sm:w-[42vw] md:min-w-[20rem] lg:pl-[8rem] xl:pl-[4rem] lg:max-w-[30rem]">
        <div class=" bg-green-500/20 rounded-full flex items-center gap-2 px-3 py-1 w-fit">
          <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span class="text-xs font-medium">{{ $t('available_for_work') }}</span>
        </div>
        <p class="text-lg leading-relaxed">
          {{ $t("home_description") }}
        </p>
      </div>
    </div>
    <!-- Photo au centre -->
    <div>
      <img src="/nana-nobg.webp" alt="profile" class="h-[80vh] lg:h-[75vh] absolute bottom-0 z-40 hidden sm:block lg:transform lg:-translate-x-1/2" />
    </div>
  </section>
</template>