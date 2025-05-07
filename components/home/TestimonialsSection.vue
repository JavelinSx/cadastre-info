<template>
    <section class="py-16 bg-gray-800 text-gray-100 overflow-hidden flex justify-center">
        <div class="container-custom">
            <div class="text-center mb-12" v-motion :initial="{ opacity: 0, y: 20 }"
                :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }">
                <h2 class="text-3xl font-bold mb-4">Отзывы наших клиентов</h2>
                <p class="text-xl text-gray-100 max-w-3xl mx-auto">
                    Что говорят люди, которые уже воспользовались нашими услугами и информацией
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(testimonial, index) in testimonials" :key="testimonial.id" v-motion
                    :initial="{ opacity: 0, y: 30 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 + (index * 150) } }"
                    class="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div class="flex items-center mb-4">
                        <div class="flex text-yellow-400">
                            <UIcon v-for="i in 5" :key="i" name="i-heroicons-star" class="w-5 h-5"
                                :class="{ 'text-gray-300': i > testimonial.rating }" />
                        </div>
                        <span class="ml-2 text-gray-600">{{ testimonial.rating }}.0/5.0</span>
                    </div>
                    <p class="text-gray-700 mb-4">{{ testimonial.text }}</p>
                    <div class="flex items-center">
                        <div
                            class="w-10 h-10 rounded-full bg-primary-100 flex-shrink-0 flex items-center justify-center">
                            <UIcon name="i-heroicons-user" class="w-6 h-6 text-primary-600" />
                        </div>
                        <div class="ml-3">
                            <h4 class="font-medium">{{ testimonial.name }}</h4>
                            <p class="text-sm text-gray-500">{{ testimonial.position }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// Отзывы
const testimonials = [
    {
        id: 1,
        rating: 5,
        text: 'Благодаря информации на сайте я смогла разобраться во всех тонкостях оформления земельного участка. Очень подробно и понятно объяснено!',
        name: 'Анна С.',
        position: 'Владелец земельного участка'
    },
    {
        id: 2,
        rating: 5,
        text: 'Обратился за помощью в оформлении документов на дом. Все было сделано быстро и качественно, без лишних походов по инстанциям.',
        name: 'Иван П.',
        position: 'Владелец жилого дома'
    },
    {
        id: 3,
        rating: 4,
        text: 'Очень полезный ресурс для тех, кто сталкивается с кадастровыми вопросами. Есть ответы практически на все вопросы.',
        name: 'Михаил К.',
        position: 'Юрист по недвижимости'
    }
];
</script>