<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
const config = useRuntimeConfig()
console.log('test',config.public.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID)

const formContainer = ref(null)

const formData = ref({
  email: '',
  message: ''
})

onMounted(() => {
  gsap.from(formContainer.value, {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.1
  })
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
  <div class=" bg-background-light dark:bg-background-dark text-primary-light dark:text-primary-dark py-20">
    <div class="max-w-4xl mx-auto px-6">
      <!-- Section titre et texte d'accroche avec animation fade-in -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="200"
        class="mb-16 text-center"
      >
        <h1 class="text-6xl font-medium mb-6 dark:text-secondary-dark text-secondary-light tracking-wider">Contactez-moi</h1>
        <p class="text-2xl text-secondary-light dark:text-secondary-dark max-w-2xl mx-auto font-normal">
          et discutons de votre projet.
        </p>
      </div>

      <!-- Formulaire avec animation GSAP -->
      <div 
        ref="formContainer"
        class="max-w-md mx-auto p-8 rounded-2xl dark:bg-white/5 border-black/10 bg-secondary-light/10 backdrop-blur-sm border dark:border-white/10 relative overflow-hidden group"
      >
        <!-- Effet de brillance au hover -->
        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shine"></div>
        </div>

        <form @submit.prevent="sendEmail" class="flex flex-col gap-6 relative">
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email"
              required
              class="bg-white/10 border border-secondary-light dark:border-secondary-dark rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark transition-all duration-300 hover:border-2 dark:hover:border-2"
              placeholder="votre@email.com"
            >
          </div>

          <div class="flex flex-col gap-2">
            <label for="message" class="text-sm">Message</label>
            <textarea 
              id="message" 
              v-model="formData.message"
              required
              rows="5"
              class="bg-white/10 border border-secondary-light dark:border-secondary-dark rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark transition-all duration-300 hover:border-2 dark:hover:border-2"
              placeholder="Décrivez votre projet..."
            ></textarea>
          </div>

          <button 
            type="submit"
            class="mt-4 bg-secondary-light dark:bg-secondary-dark text-background-light dark:text-background-dark py-4 px-8 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg relative overflow-hidden group"
          >
            <span class="relative z-10 dark:text-primary-dark">Envoyer</span>
            <div class="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </form>
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