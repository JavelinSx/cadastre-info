<template>
  <section class="py-16 bg-white text-gray-600 flex justify-center">
    <div class="container-custom">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Левая часть - основная информация -->
        <div v-motion :initial="{ opacity: 0, x: -50 }" :visible-once="{
          opacity: 1,
          x: 0,
          transition: {
            duration: 400
          }
        }">
          <h2 class="text-3xl font-bold mb-4" v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 300,
              delay: 100
            }
          }">
            Актуальная правовая информация
          </h2>

          <p class="text-gray-600 mb-6" v-motion :initial="{ opacity: 0, y: 20 }" :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 300,
              delay: 150
            }
          }">
            Мы собрали всю необходимую информацию о кадастровой деятельности, чтобы вы могли разобраться в
            этой сложной теме. Наши материалы постоянно обновляются в соответствии с изменениями в
            законодательстве.
          </p>

          <ul class="space-y-4">
            <li v-for="(item, index) in infoItems" :key="item.id" class="flex items-start" v-motion
              :initial="{ opacity: 0, x: -30, scale: 0.95 }" :visible-once="{
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  duration: 300,
                  delay: 200 + (index * 80)
                }
              }">
              <div v-motion :initial="{ scale: 0, rotate: 90 }" :visible-once="{
                scale: 1,
                rotate: 0,
                transition: {
                  duration: 300,
                  delay: 220 + (index * 80)
                }
              }">
                <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-green-500 mt-1 mr-2 flex-shrink-0" />
              </div>
              <span>{{ item.text }}</span>
            </li>
          </ul>

          <div v-motion :initial="{ opacity: 0, y: 30, scale: 0.9 }" :visible-once="{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 300,
              delay: 300
            }
          }">
            <UButton to="/information" color="primary" variant="solid" class="mt-8">
              Узнать больше
            </UButton>
          </div>
        </div>

        <!-- Правая часть - обновления законодательства -->
        <div class="bg-gray-100 p-8 rounded-lg" v-motion :initial="{ opacity: 0, x: 50, rotateY: 15 }" :visible-once="{
          opacity: 1,
          x: 0,
          rotateY: 0,
          transition: {
            duration: 400,
            delay: 100
          }
        }">
          <h3 class="text-2xl font-semibold mb-4" v-motion :initial="{ opacity: 0, y: 20 }" :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 300,
              delay: 200
            }
          }">
            Последние обновления законодательства
          </h3>

          <div class="space-y-6">
            <div v-for="(update, index) in lawsData.lawCategories[0].laws" :key="index"
              class="border-b border-gray-200 pb-4 last:border-0 last:pb-0" v-motion :initial="{
                opacity: 0,
                y: 40,
                scale: 0.95
              }" :visible-once="{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 350,
                  delay: 250 + (index * 100)
                }
              }">
              <p class="text-sm text-gray-500 mb-1" v-motion :initial="{ opacity: 0, x: -20 }" :visible-once="{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 300,
                  delay: 300 + (index * 100)
                }
              }">
                {{ update.name }}
              </p>

              <h4 class="text-lg font-medium mb-2" v-motion :initial="{ opacity: 0, y: 15 }" :visible-once="{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 300,
                  delay: 320 + (index * 100)
                }
              }">
                {{ update.title }}
              </h4>

              <p class="text-gray-600" v-motion :initial="{ opacity: 0, y: 10 }" :visible-once="{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 300,
                  delay: 340 + (index * 100)
                }
              }">
                {{ update.description }}
              </p>

              <div v-motion :initial="{ opacity: 0, x: -15, scale: 0.9 }" :visible-once="{
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  duration: 300,
                  delay: 360 + (index * 100)
                }
              }">
                <NuxtLink :to="update.link"
                  class="inline-flex items-center text-primary-600 hover:text-primary-800 mt-2">
                  Читать полностью
                  <UIcon name="i-heroicons-arrow-right" class="ml-1 w-4 h-4" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { lawsData } from '~/utils/data/information';

// Информационные пункты
const infoItems = [
  {
    id: 1,
    text: 'Полная информация о кадастровом учете и регистрации прав'
  },
  {
    id: 2,
    text: 'Подробные инструкции по оформлению документов'
  },
  {
    id: 3,
    text: 'Актуальные требования к межевым и техническим планам'
  },
  {
    id: 4,
    text: 'Разъяснение сложных юридических вопросов простым языком'
  },
  {
    id: 5,
    text: 'Ответы на часто задаваемые вопросы в сфере кадастра'
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

/* Стили для 3D эффектов */
[data-v-motion] {
  transform-style: preserve-3d;
}
</style>