<script setup>
import { onMounted, ref, computed } from 'vue'
import { useColorMode } from '#imports'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const config = useRuntimeConfig()
console.log('test', config.public.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID)

const formContainer = ref(null)

const formData = ref({
  email: '',
  message: ''
})

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const downloadCV = () => {
  const link = document.createElement('a');
  const cvFileName = locale.value === 'fr' ? 'cv-front-fr.pdf' : 'cv-en-frontend.pdf';
  link.href = `/${cvFileName}`;
  link.download = cvFileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);  
};

onMounted(async () => {
  const Velocity = (await import('velocity-animate')).default;
  if (typeof window === 'undefined') return;

  if (formContainer.value) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Velocity(entry.target, { translateY: [0, 100], opacity: [1, 0] }, { duration: 1000, delay: 100, easing: "easeOutCubic" });
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    observer.observe(formContainer.value);
  }
})

const sendEmail = async () => {
  try {
    await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        service_id: "service_o5es8bw",
        template_id: "template_46zwuqq",
        user_id: "8HeOXfq-dliPqyC1R",
        template_params: {
          to_email: 'mclambo60@gmail.com',
          from_email: formData.value.email,
          message: formData.value.message
        }
      })
    })

    alert('Message envoyé avec succès!')
    formData.value = { email: '', message: '' }
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
    alert('Une erreur est survenue lors de l\'envoi du message.')
  }
}
</script>

<template>
  <div class="flex min-w-screen sm:w-screen max-h-screen">
    <div class=" bg-secondary-light/30 dark:bg-[#030508]/20 w-full mx-[8rem] p-[4rem] h-fit flex flex-col xl:gap-[8rem] items-center xl:grid xl:grid-cols-2 rounded-2xl shadow-xl border border-[#39383f]">
      <div class="md:my-auto flex flex-col items-center xl:items-start h-fit">
        <h2 class="text-6xl tracking-wide text-center font-extrabold mb-8">{{ $t('contact') }}</h2>
        <form class="space-y-6 w-full">
          <div>
            <label class="block mb-2" for="name">{{$t('last_name' ) + ' ' + $t('first_name')}}</label>
            <input
              id="name"
              type="text"
              class="w-full bg-transparent border border-[#39383f] rounded-md px-4 py-3  placeholder-secondary-dark/40 dark:placeholder-secondary-dark "
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label class="block mb-2" for="email">Email</label>
            <input
              id="email"
              type="email"
              class="w-full bg-transparent border border-[#39383f] rounded-md px-4 py-3  placeholder-secondary-dark/40 dark:placeholder-secondary-dark  "
              placeholder="jane.doe@gmail.com"
            />
          </div>
          <div>
            <label class="block mb-2" for="message">Message</label>
            <textarea
              id="message"
              rows="4"
              class="w-full bg-transparent border border-[#39383f] rounded-md px-4 py-3  placeholder-secondary-dark/40 dark:placeholder-secondary-dark "
              :placeholder="$t('desc')"
            ></textarea>
          </div>
        
          <div class="flex flex-col items-center md:flex-row gap-4">
            <button
            type="submit"
            class="flex items-center gap-2 bg-primary-light dark:bg-primary-dark/85 hover:bg-orange-500 dark:hover:bg-orange-500 dark:hover:text-primary-dark transition-colors dark:text-primary-light text-primary-dark font-semibold px-8 py-3 rounded-xl"
          >
            {{ $t('send') }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <div class="flex gap-4">
              <a href="https://www.linkedin.com/in/marie-claire-lambo-0838a917b/" target="_blank" class="font-semibold p-3 rounded-xl border border-primary-light dark:border-primary-dark inline-flex items-center justify-center">
                <img :src="isDark ? '/linkedin-dark.svg' : '/linkedin.svg'" alt="LinkedIn" class="w-4 h-4">
              </a>
              <a href="https://github.com/fullmc" target="_blank" class="font-semibold p-3 rounded-xl border border-primary-light dark:border-primary-dark inline-flex items-center justify-center">
                <img :src="isDark ? '/github-dark.svg' : '/github.svg'" alt="GitHub" class="w-4 h-4">
              </a>
            </div>
            <!-- Download CV -->
            <button type="button" class="flex gap-2 p-2 border border-primary-light dark:border-primary-dark rounded-lg text-sm items-center" @click="downloadCV()">
              {{ $t('download_cv') }}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
      <div class="m-auto">
        <img src="/proto.webp" class="rounded-2xl border border-primary-light dark:border-primary-dark xl:block hidden">
      </div>
    </div>
  </div>
</template>

<style>
@keyframes shine {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(100%);
  }
}

.animate-shine {
  animation: shine 2s infinite;
}
</style>