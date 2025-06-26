<template>
  <div class="py-16 relative overflow-hidden min-h-screen">
    <!-- Анимированный градиентный фон -->
    <div class="absolute inset-0">
      <!-- Основной градиентный фон с анимацией -->
      <div class="absolute inset-0 animated-gradient"></div>

      <!-- Декоративные элементы -->
      <div class="absolute top-10 left-10 w-32 h-32 bg-green-400/10 rounded-full blur-xl animate-float" v-motion
        :initial="{ scale: 0, opacity: 0 }" :visible="{
          scale: 1,
          opacity: 1,
          transition: {
            duration: 400,
            delay: 100
          }
        }"></div>
      <div class="absolute bottom-20 right-20 w-48 h-48 bg-gray-300/10 rounded-full blur-2xl animate-float-reverse"
        v-motion :initial="{ scale: 0, opacity: 0 }" :visible="{
          scale: 1,
          opacity: 1,
          transition: {
            duration: 350,
            delay: 150
          }
        }"></div>
      <div class="absolute top-1/2 left-1/3 w-24 h-24 bg-green-300/15 rounded-full blur-lg animate-pulse-float" v-motion
        :initial="{ scale: 0, opacity: 0 }" :visible="{
          scale: 1,
          opacity: 1,
          transition: {
            duration: 300,
            delay: 200
          }
        }"></div>
    </div>

    <!-- Текстурный оверлей для дополнительной глубины -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)]"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
      <!-- Заголовок страницы -->
      <div class="text-center mb-12" v-motion :initial="{ opacity: 0, y: -40, scale: 0.95 }" :visible="{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 400,
          type: 'spring',
          stiffness: 80
        }
      }">
        <h1 class="text-4xl font-bold mb-4 text-white" v-motion :initial="{ opacity: 0, rotateX: -20 }" :visible="{
          opacity: 1,
          rotateX: 0,
          transition: {
            duration: 350,
            delay: 100,
            type: 'spring'
          }
        }">
          Наши услуги
        </h1>
        <p class="text-xl text-white/90 max-w-3xl mx-auto" v-motion :initial="{ opacity: 0, y: 20 }" :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 300,
            delay: 150
          }
        }">
          Полный комплекс кадастровых работ и услуг по оформлению недвижимости
          от квалифицированных специалистов
        </p>
      </div>

      <!-- Сетка услуг -->
      <div v-motion :initial="{ opacity: 0, y: 50 }" :visible="{
        opacity: 1,
        y: 0,
        transition: {
          duration: 400,
          delay: 200
        }
      }">
        <ServicesGrid :services="servicesBaseList" />
      </div>

      <!-- Блок "Почему выбирают нас" -->
      <div v-motion :initial="{ opacity: 0, scale: 0.95, y: 40 }" :visible="{
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 400,
          delay: 100
        }
      }">
        <ServicesFeatures :features="featuresList" />
      </div>

      <!-- Блок с призывом к действию -->
      <div v-motion :initial="{ opacity: 0, y: 60, scale: 0.9 }" :visible="{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 400,
          delay: 150,
          type: 'spring'
        }
      }">
        <ServiceCTA title="Нужна помощь с оформлением документов?"
          description="Получите бесплатную консультацию по любому вопросу, связанному с кадастровыми работами и оформлением недвижимости"
          :primaryButton="{
            text: 'Оставить заявку',
            link: '/request'
          }" :secondaryButton="{
                      text: 'Контакты',
                      link: '/contacts'
                    }" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ServiceCTA } from '~/components/services';
import ServicesFeatures from '~/components/services/ServicesFeatures.vue';
import ServicesGrid from '~/components/services/ServicesGrid.vue';
import { featuresList, servicesBaseList } from '~/utils/data/services';

// SEO настройки
useSeoMeta({
  title: 'Кадастровые услуги в Плесецком районе - Полный перечень услуг | ПлесКад',
  description: 'Полный перечень кадастровых услуг в Плесецком районе: межевание земельных участков, технические планы зданий и сооружений, постановка на кадастровый учет. Профессиональные услуги кадастрового инженера.',
  keywords: 'кадастровые услуги Плесецк, межевание Плесецкий район, технический план Плесецк, кадастровый инженер Архангельская область, кадастровые работы Плесецк',

  ogTitle: 'Кадастровые услуги в Плесецком районе | ПлесКад',
  ogDescription: 'Полный перечень кадастровых услуг: межевание, технические планы, кадастровый учет. Профессиональные услуги в Плесецком районе.',
  ogImage: 'https://pleskad.ru/images/og-services.jpg'
})
</script>

<style scoped>
/* Плавный бесконечный переход градиента */
@keyframes infiniteGradientShift {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

/* Класс для анимированного градиента */
.animated-gradient {
  background: linear-gradient(-45deg,
      rgb(75 85 99),
      /* gray-600 - серый */
      rgb(34 197 94),
      /* green-500 - зеленый */
      rgb(75 85 99),
      /* gray-600 - серый */
      rgb(34 197 94)
      /* green-500 - зеленый */
    );
  background-size: 400% 400%;
  animation: infiniteGradientShift 8s ease-in-out infinite;
}

/* Анимации для декоративных элементов */
@keyframes float {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg) scale(1);
  }

  33% {
    transform: translateY(-15px) rotate(5deg) scale(1.1);
  }

  66% {
    transform: translateY(-5px) rotate(-3deg) scale(0.95);
  }
}

@keyframes floatReverse {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg) scale(1);
  }

  33% {
    transform: translateY(10px) rotate(-5deg) scale(0.9);
  }

  66% {
    transform: translateY(-10px) rotate(3deg) scale(1.05);
  }
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 0.15;
  }

  50% {
    transform: scale(1.2) rotate(10deg);
    opacity: 0.08;
  }
}

.animate-float {
  animation: float 10s ease-in-out infinite;
}

.animate-float-reverse {
  animation: floatReverse 12s ease-in-out infinite;
}

.animate-pulse-float {
  animation: pulse 8s ease-in-out infinite;
}

/* Оптимизация для мобильных */
@media (max-width: 767px) {

  /* Более плавная анимация градиента на мобильных */
  .animated-gradient {
    animation-duration: 12s;
    /* Замедляем на мобильных */
  }

  /* Уменьшаем размер декоративных элементов на мобильных */
  .absolute.w-32 {
    width: 4rem;
    height: 4rem;
  }

  .absolute.w-48 {
    width: 6rem;
    height: 6rem;
  }

  .absolute.w-24 {
    width: 3rem;
    height: 3rem;
  }
}

/* Стили для 3D эффектов */
[data-v-motion] {
  transform-style: preserve-3d;
}
</style>