<template>
  <section class="py-16 text-white relative overflow-hidden min-h-[600px]">
    <!-- Градиентный фон -->
    <div class="absolute inset-0">
      <!-- Основной градиентный фон с анимацией -->
      <div class="absolute inset-0 animated-gradient"></div>

      <!-- Декоративные элементы -->
      <div class="absolute top-10 left-10 w-32 h-32 bg-green-400/10 rounded-full blur-xl"></div>
      <div class="absolute bottom-20 right-20 w-48 h-48 bg-gray-300/10 rounded-full blur-2xl"></div>
      <div class="absolute top-1/2 left-1/3 w-24 h-24 bg-green-300/15 rounded-full blur-lg"></div>
    </div>

    <!-- Текстурный оверлей для дополнительной глубины -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)]"></div>

    <div class="container-custom relative z-10">
      <!-- Заголовок - сразу виден, используем :visible-once -->
      <div class="text-center mb-12" v-motion :initial="{ opacity: 0, y: -30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 300, delay: 200 } }">
        <div
          class="feature-card h-full rounded-xl overflow-hidden border pt-6 pb-6 relative border-white/20
                     bg-white/10 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          v-motion :initial="{ opacity: 0, scale: 0.9 }"
          :visible-once="{ opacity: 1, scale: 1, transition: { duration: 300, delay: 200 } }">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
          <h2 class="text-2xl mb-4 text-white font-bold">Почему выбирают нас</h2>

          <p class="text-base text-white/90 max-w-3xl mx-auto leading-relaxed hyphens-auto break-words pr-8 pl-8">
            Профессиональные теоретические знания в области кадастровой деятельности, территориального
            планирования, строительства и архитектуры, подкрепленные отточенной логикой и приумноженные на
            огромный опыт работы в данных сферах деятельности.
          </p>
        </div>
      </div>

      <!-- Карточки - появляются при скролле, используем :visible-once -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(feature, index) in features" :key="feature.id" class="feature-item" v-motion :initial="{
          opacity: 0,
          y: 50,
          rotate: -5
        }" :visible-once="{
          opacity: 1,
          y: 0,
          rotate: 0,
          transition: {
            duration: 300,
            delay: index * 150,
            type: 'spring',
            stiffness: 100
          }
        }">
          <div
            class="feature-card h-full rounded-xl overflow-hidden border border-white/20
                         bg-white/10 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <!-- Верхняя часть карточки с иконкой и цветным акцентом -->
            <div class="pt-6 pb-4 px-6 relative">
              <!-- Цветной акцент сверху карточки -->
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600"></div>

              <!-- Круг с иконкой -->
              <div class="flex justify-center mb-4">
                <div class="w-16 h-16 rounded-full bg-green-100/90 p-4 flex items-center justify-center
                           shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-green-200/90"
                  v-motion :initial="{ scale: 0, rotate: 180 }" :visible-once="{
                    scale: 1,
                    rotate: 0,
                    transition: {
                      duration: 300,
                      delay: index * 150 + 200,
                      type: 'spring'
                    }
                  }">
                  <UIcon :name="feature.icon" class="w-8 h-8 text-green-700" />
                </div>
              </div>

              <!-- Заголовок -->
              <h3 class="text-xl font-semibold text-white text-center" v-motion :initial="{ opacity: 0, x: -20 }"
                :visible-once="{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 300,
                    delay: index * 150 + 200
                  }
                }">
                {{ feature.title }}
              </h3>
            </div>

            <!-- Разделитель -->
            <div class="w-3/4 h-px bg-white/30 mx-auto" v-motion :initial="{ scaleX: 0 }" :visible-once="{
              scaleX: 1,
              transition: {
                duration: 300,
                delay: index * 150 + 200
              }
            }"></div>

            <!-- Описание -->
            <div class="p-6">
              <p class="text-white/90 text-center leading-relaxed" v-motion :initial="{ opacity: 0, y: 20 }"
                :visible-once="{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 300,
                    delay: index * 150 + 200
                  }
                }">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Преимущества
const features = [
  {
    id: 1,
    icon: 'i-heroicons-academic-cap',
    title: 'Экспертность',
    description: 'Наши специалисты имеют высшее образование в сфере строительства, маркшейдерии (горная геодезия) кадастровой деятельности, судебной экспертизы, экономики.'
  },
  {
    id: 2,
    icon: 'i-heroicons-document-check',
    title: 'Эффективность',
    description: 'Многолетний опыт работы в сфере кадастра и геодезии (более 20 лет)'
  },
  {
    id: 3,
    icon: 'i-heroicons-clock',
    title: 'Оперативность',
    description: 'Быстрое решение ваших вопросов и минимальные сроки оформления документов'
  },
  {
    id: 4,
    icon: 'i-heroicons-user-group',
    title: 'Поддержка',
    description: 'Бесплатные консультации и помощь на каждом этапе выполнения работ до достижения требуемого результата'
  }
];
</script>

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

/* Обеспечим достаточную высоту секции */
section {
  min-height: 50vh;
}

/* Стили для карточек */
.feature-card {
  position: relative;
  isolation: isolate;
}

/* Улучшенный стеклянный эффект */
.feature-card {
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.feature-card:hover {
  backdrop-filter: blur(15px);
  border-color: rgba(255, 255, 255, 0.3);
}

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

/* Оптимизация для мобильных */
@media (max-width: 767px) {
  .feature-card {
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
    backdrop-filter: blur(5px);
  }

  /* Замедляем анимацию на мобильных */
  .animated-gradient {
    animation-duration: 12s;
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

/* Улучшенный перенос слов для текста */
p {
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  text-align: center;
  text-justify: inter-word;
}

/* Дополнительные анимации для декоративных элементов */
@keyframes float {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg) scale(1);
    opacity: 0.1;
  }

  33% {
    transform: translateY(-15px) rotate(5deg) scale(1.1);
    opacity: 0.15;
  }

  66% {
    transform: translateY(-5px) rotate(-3deg) scale(0.95);
    opacity: 0.08;
  }
}

@keyframes floatReverse {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg) scale(1);
    opacity: 0.1;
  }

  33% {
    transform: translateY(10px) rotate(-5deg) scale(0.9);
    opacity: 0.15;
  }

  66% {
    transform: translateY(-10px) rotate(3deg) scale(1.05);
    opacity: 0.12;
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

.absolute.w-32 {
  animation: float 10s ease-in-out infinite;
}

.absolute.w-48 {
  animation: floatReverse 12s ease-in-out infinite;
  animation-delay: 2s;
}

.absolute.w-24 {
  animation: pulse 8s ease-in-out infinite;
  animation-delay: 4s;
}
</style>