<template>
  <section class="py-16 bg-primary-600 text-white relative overflow-hidden flex justify-center">
    <!-- Анимированный фоновый эффект -->
    <div class="absolute inset-0 z-0">
      <div class="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary-500 opacity-30 animate-float" v-motion
        :initial="{ scale: 0, opacity: 0, rotate: -45 }" :visible="{
          scale: 1,
          opacity: 0.3,
          rotate: 0,
          transition: {
            duration: 400,
            delay: 50
          }
        }"></div>
      <div class="absolute top-20 -left-20 w-40 h-40 rounded-full bg-primary-700 opacity-20 animate-float" v-motion
        :initial="{ scale: 0, opacity: 0, rotate: 45 }" :visible="{
          scale: 1,
          opacity: 0.2,
          rotate: 0,
          transition: {
            duration: 350,
            delay: 100
          }
        }" style="animation-delay: 1s;"></div>
      <div class="absolute bottom-10 right-20 w-32 h-32 rounded-full bg-primary-800 opacity-20 animate-float" v-motion
        :initial="{ scale: 0, opacity: 0, rotate: -30 }" :visible="{
          scale: 1,
          opacity: 0.2,
          rotate: 0,
          transition: {
            duration: 300,
            delay: 150
          }
        }" style="animation-delay: 2s;"></div>
    </div>

    <div class="container-custom text-center relative z-10">
      <div v-motion :initial="{ opacity: 0, y: 50, scale: 0.9 }" :visible="{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 400
        }
      }">
        <h2 class="text-3xl font-bold mb-4" v-motion :initial="{ opacity: 0, y: 30, rotateX: -15 }" :visible="{
          opacity: 1,
          y: 0,
          rotateX: 0,
          transition: {
            duration: 300,
            delay: 100
          }
        }">
          Готовы начать?
        </h2>

        <p class="text-xl mb-8 max-w-3xl mx-auto" v-motion :initial="{ opacity: 0, y: 20 }" :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 300,
            delay: 150
          }
        }">
          Оставьте заявку прямо сейчас и мы свяжемся с вами в ближайшее время
        </p>

        <div v-motion :initial="{ opacity: 0, scale: 0, rotate: 10 }" :visible="{
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: {
            duration: 350,
            delay: 200,
            type: 'spring',
            stiffness: 100
          }
        }">
          <UButton to="/request" variant="outline"
            class="text-white backdrop-blur-sm bg-white/10 hover:bg-white/20 transform transition-all duration-300 hover:scale-105 hover:shadow-glow"
            size="xl">
            <span class="relative z-10">Оставить заявку</span>
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container-custom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container-custom {
    padding: 0 2rem;
  }
}

@media (min-width: 1024px) {
  .container-custom {
    padding: 0 4rem;
  }
}

@keyframes float {
  0% {
    transform: translateY(0) rotate(0);
  }

  50% {
    transform: translateY(-20px) rotate(5deg);
  }

  100% {
    transform: translateY(0) rotate(0);
  }
}

.animate-float {
  animation: float 12s ease-in-out infinite;
}

.hover\:shadow-glow:hover {
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

/* Стили для 3D эффектов */
[data-v-motion] {
  transform-style: preserve-3d;
}
</style>