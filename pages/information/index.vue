<template>
  <div class="py-16 text-white relative overflow-hidden min-h-screen">
    <!-- Анимированный градиентный фон -->
    <div class="absolute inset-0">
      <!-- Основной градиентный фон с анимацией -->
      <div class="absolute inset-0 animated-gradient"></div>

      <!-- Декоративные элементы -->
      <div class="absolute top-10 left-10 w-32 h-32 bg-gray-300/10 rounded-full blur-xl animate-float" v-motion
        :initial="{ scale: 0, opacity: 0 }" :visible="{
          scale: 1,
          opacity: 1,
          transition: {
            duration: 400,
            delay: 100
          }
        }"></div>
      <div class="absolute bottom-20 right-20 w-48 h-48 bg-gray-400/10 rounded-full blur-2xl animate-float-reverse"
        v-motion :initial="{ scale: 0, opacity: 0 }" :visible="{
          scale: 1,
          opacity: 1,
          transition: {
            duration: 350,
            delay: 150
          }
        }"></div>
      <div class="absolute top-1/2 left-1/3 w-24 h-24 bg-gray-200/15 rounded-full blur-lg animate-pulse-float" v-motion
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
    <div class="container-custom relative z-10">
      <!-- Заголовок страницы -->
      <InfoHeader :title="data.title" :description="data.description" />

      <!-- Основное содержимое -->
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Главная колонка -->
        <div class="md:col-span-2">
          <!-- Информационные блоки -->
          <div class="space-y-8">
            <!-- Блок "Что такое кадастровые работы" -->
            <div class="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-white/30 p-8" v-motion
              :initial="{ opacity: 0, x: -50, rotateY: -10 }" :visible="{
                opacity: 1,
                x: 0,
                rotateY: 0,
                transition: {
                  duration: 400,
                  delay: 100
                }
              }">
              <h2 class="text-2xl font-semibold mb-4 text-gray-800" v-motion :initial="{ opacity: 0, y: 20 }" :visible="{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 300,
                  delay: 200
                }
              }">
                {{ data.sections[0].title }}
              </h2>
              <div v-for="(paragraph, pIndex) in data.sections[0].paragraphs" :key="pIndex" v-motion
                :initial="{ opacity: 0, y: 15 }" :visible="{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 300,
                    delay: 250 + (pIndex * 50)
                  }
                }">
                <p class="text-gray-600 mb-4">
                  {{ paragraph }}
                </p>
              </div>
            </div>

            <!-- Блок "Законодательство" -->
            <div class="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-white/30 p-8" v-motion
              :initial="{ opacity: 0, x: -50, rotateY: -10 }" :visible="{
                opacity: 1,
                x: 0,
                rotateY: 0,
                transition: {
                  duration: 400,
                  delay: 150
                }
              }">
              <h2 class="text-2xl font-semibold mb-4 text-gray-800" v-motion :initial="{ opacity: 0, y: 20 }" :visible="{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 300,
                  delay: 250
                }
              }">
                {{ data.sections[1].title }}
              </h2>
              <div v-for="(paragraph, pIndex) in data.sections[1].paragraphs" :key="pIndex" v-motion
                :initial="{ opacity: 0, y: 15 }" :visible="{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 300,
                    delay: 300 + (pIndex * 50)
                  }
                }">
                <p class="text-gray-600 mb-4">
                  {{ paragraph }}
                </p>
              </div>
              <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-600" v-motion :initial="{ opacity: 0, x: -20 }"
                :visible="{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 350,
                    delay: 350
                  }
                }">
                <li v-for="(item, itemIndex) in data.sections[1].list" :key="itemIndex" v-motion
                  :initial="{ opacity: 0, x: -15 }" :visible="{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 300,
                      delay: 400 + (itemIndex * 80)
                    }
                  }">
                  {{ item }}
                </li>
              </ul>
              <div v-motion :initial="{ opacity: 0, scale: 0.9 }" :visible="{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 300,
                  delay: 500
                }
              }">
                <NuxtLink :to="data.sections[1].linkUrl"
                  class="text-primary-600 hover:text-primary-800 inline-flex items-center">
                  {{ data.sections[1].linkText }}
                  <UIcon name="i-heroicons-arrow-right" class="ml-1 w-5 h-5" />
                </NuxtLink>
              </div>
            </div>

            <!-- Блок "Типы кадастровых документов" -->
            <div class="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-white/30 p-8" v-motion
              :initial="{ opacity: 0, x: -50, rotateY: -10 }" :visible="{
                opacity: 1,
                x: 0,
                rotateY: 0,
                transition: {
                  duration: 400,
                  delay: 200
                }
              }">
              <h2 class="text-2xl font-semibold mb-4 text-gray-800" v-motion :initial="{ opacity: 0, y: 20 }" :visible="{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 300,
                  delay: 300
                }
              }">
                {{ data.sections[2].title }}
              </h2>
              <div v-for="(paragraph, pIndex) in data.sections[2].paragraphs" :key="pIndex" v-motion
                :initial="{ opacity: 0, y: 15 }" :visible="{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 300,
                    delay: 350 + (pIndex * 50)
                  }
                }">
                <p class="text-gray-600 mb-4">
                  {{ paragraph }}
                </p>
              </div>
              <div class="space-y-4 mb-4">
                <div v-for="(subsection, subIndex) in data.sections[2].subsections" :key="subIndex"
                  class="border-l-4 border-primary-500 pl-4" v-motion :initial="{ opacity: 0, x: -30, scale: 0.95 }"
                  :visible="{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    transition: {
                      duration: 350,
                      delay: 400 + (subIndex * 100)
                    }
                  }">
                  <h3 class="text-lg font-medium mb-2 text-gray-800">{{ subsection.title }}</h3>
                  <p class="text-gray-600">
                    {{ subsection.content }}
                  </p>
                </div>
              </div>
              <div v-motion :initial="{ opacity: 0, scale: 0.9 }" :visible="{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 300,
                  delay: 600
                }
              }">
                <NuxtLink :to="data.sections[2].linkUrl"
                  class="text-primary-600 hover:text-primary-800 inline-flex items-center">
                  {{ data.sections[2].linkText }}
                  <UIcon name="i-heroicons-arrow-right" class="ml-1 w-5 h-5" />
                </NuxtLink>
              </div>
            </div>

            <!-- Блок "Процедура кадастрового учета" -->
            <div class="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-white/30 p-8" v-motion
              :initial="{ opacity: 0, x: -50, rotateY: -10 }" :visible="{
                opacity: 1,
                x: 0,
                rotateY: 0,
                transition: {
                  duration: 400,
                  delay: 250
                }
              }">
              <h2 class="text-2xl font-semibold mb-4 text-gray-800" v-motion :initial="{ opacity: 0, y: 20 }" :visible="{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 300,
                  delay: 350
                }
              }">
                {{ data.sections[3].title }}
              </h2>
              <div v-for="(paragraph, pIndex) in data.sections[3].paragraphs" :key="pIndex" v-motion
                :initial="{ opacity: 0, y: 15 }" :visible="{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 300,
                    delay: 400 + (pIndex * 50)
                  }
                }">
                <p class="text-gray-600 mb-4">
                  {{ paragraph }}
                </p>
              </div>
              <h3 class="text-xl font-semibold mb-3 text-gray-800 mt-4" v-motion :initial="{ opacity: 0, y: 15 }"
                :visible="{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 300,
                    delay: 450
                  }
                }">
                {{ data.sections[3].subtitleText }}
              </h3>
              <ol class="list-decimal pl-6 mb-6 space-y-3 text-gray-600">
                <li v-for="(item, itemIndex) in data.sections[3].numberedList" :key="itemIndex" v-motion
                  :initial="{ opacity: 0, x: -20 }" :visible="{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 300,
                      delay: 500 + (itemIndex * 100)
                    }
                  }">
                  <span class="font-medium">{{ item.title }}</span> —
                  <span>{{ item.description }}</span>
                </li>
              </ol>
              <div v-for="(paragraph, pIndex) in data.sections[3].paragraphsAfter" :key="pIndex" v-motion
                :initial="{ opacity: 0, y: 15 }" :visible="{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 300,
                    delay: 700 + (pIndex * 50)
                  }
                }">
                <p class="text-gray-600">
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Боковая панель -->
        <div class="w-full" v-motion :initial="{ opacity: 0, x: 50, rotateY: 10 }" :visible="{
          opacity: 1,
          x: 0,
          rotateY: 0,
          transition: {
            duration: 400,
            delay: 200
          }
        }">
          <InfoSidebar title="Разделы информации" :links="data.sidebarLinks">
            <!-- Популярные вопросы -->
            <div
              class="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-white/30 p-6 mb-8 border border-green-500 md:border-white/30"
              v-motion :initial="{ opacity: 0, y: 30, scale: 0.95 }" :visible="{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 350,
                  delay: 300
                }
              }">
              <h3 class="text-xl font-semibold mb-4 text-gray-800" v-motion :initial="{ opacity: 0, y: 15 }" :visible="{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 300,
                  delay: 400
                }
              }">
                Популярные вопросы
              </h3>
              <ul class="space-y-4">
                <li v-for="(question, qIndex) in data.popularQuestions" :key="qIndex"
                  class="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0" v-motion
                  :initial="{ opacity: 0, x: -20 }" :visible="{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 300,
                      delay: 450 + (qIndex * 80)
                    }
                  }">
                  <NuxtLink to="/information/faq" class="text-gray-700 hover:text-primary-600 flex items-start group">
                    <UIcon name="i-heroicons-question-mark-circle"
                      class="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                    <span class="group-hover:underline decoration-dotted">{{ question }}</span>
                  </NuxtLink>
                </li>
              </ul>
              <div class="mt-4" v-motion :initial="{ opacity: 0, scale: 0.9 }" :visible="{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 300,
                  delay: 600
                }
              }">
                <NuxtLink to="/information/faq"
                  class="text-primary-600 hover:text-primary-800 inline-flex items-center">
                  Все вопросы и ответы
                  <UIcon name="i-heroicons-arrow-right" class="ml-1 w-5 h-5" />
                </NuxtLink>
              </div>
            </div>
          </InfoSidebar>
        </div>
      </div>

      <!-- Секция "Полезные материалы" -->
      <div class="mt-12" v-motion :initial="{ opacity: 0, y: 50 }" :visible="{
        opacity: 1,
        y: 0,
        transition: {
          duration: 400,
          delay: 100
        }
      }">
        <h2 class="text-2xl font-bold mb-6 text-center" v-motion :initial="{ opacity: 0, y: 20 }" :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 300,
            delay: 200
          }
        }">
          Полезные материалы
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(material, mIndex) in data.usefulMaterials" :key="mIndex"
            class="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-white/30 p-6 transition-all duration-300 hover:shadow-xl hover:border-white/50"
            v-motion :initial="{
              opacity: 0,
              y: 40,
              scale: 0.95
            }" :visible="{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: {
                            duration: 350,
                            delay: 300 + (mIndex * 100)
                          }
                        }">
            <div v-motion :initial="{ scale: 0, rotate: 45 }" :visible="{
              scale: 1,
              rotate: 0,
              transition: {
                duration: 300,
                delay: 350 + (mIndex * 100)
              }
            }">
              <UIcon :name="material.icon" class="w-10 h-10 text-primary-600 mb-4" />
            </div>
            <h3 class="text-lg font-semibold mb-2 text-gray-800" v-motion :initial="{ opacity: 0, y: 15 }" :visible="{
              opacity: 1,
              y: 0,
              transition: {
                duration: 300,
                delay: 400 + (mIndex * 100)
              }
            }">
              {{ material.title }}
            </h3>
            <p class="text-gray-600 mb-4" v-motion :initial="{ opacity: 0, y: 10 }" :visible="{
              opacity: 1,
              y: 0,
              transition: {
                duration: 300,
                delay: 450 + (mIndex * 100)
              }
            }">
              {{ material.description }}
            </p>
            <div v-motion :initial="{ opacity: 0, scale: 0.9 }" :visible="{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 300,
                delay: 500 + (mIndex * 100)
              }
            }">
              <NuxtLink :to="material.url" class="text-primary-600 hover:text-primary-800 inline-flex items-center">
                {{ material.linkText }}
                <UIcon name="i-heroicons-arrow-right" class="ml-1 w-5 h-5" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { informationData } from '~/utils/data/information';
import InfoHeader from '~/components/information/InfoHeader.vue';
import InfoSidebar from '~/components/information/InfoSidebar.vue';

const data = ref(informationData);

definePageMeta({
  title: 'Информация о кадастровых услугах',
  description: 'Полезная правовая и юридическая информация в сфере кадастра и недвижимости, законодательство, документы и ответы на вопросы.'
});
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

/* Класс для анимированного серого градиента */
.animated-gradient {
  background: linear-gradient(-45deg,
      rgb(229 231 235),
      /* gray-200 - светло-серый */
      rgb(156 163 175),
      /* gray-400 - серый */
      rgb(75 85 99),
      /* gray-600 - темно-серый */
      rgb(156 163 175),
      /* gray-400 - серый */
      rgb(229 231 235),
      /* gray-200 - светло-серый */
      rgb(156 163 175)
      /* gray-400 - серый */
    );
  background-size: 400% 400%;
  animation: infiniteGradientShift 10s ease-in-out infinite;
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
    animation-duration: 14s;
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