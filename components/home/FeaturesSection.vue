<template>
    <section class="py-16 bg-gray-50 text-gray-600">
        <div class="container-custom">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold mb-4">Почему выбирают нас</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Профессиональные теоретические знания в области кадастровой деятельности, территориального
                    планирования, строительства и архитектуры, подкрепленные отточенной логикой и приумноженные на
                    огромный опыт работы в данных сферах деятельности.
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div v-for="feature in features" :key="feature.id" class="text-center flex flex-col items-center">
                    <div class="flex items-center w-64">
                        <div class="rounded-full bg-primary-100 p-4 w-16 h-16 flex items-center justify-center  mb-4">
                            <UIcon :name="feature.icon" class="w-8 h-8 text-primary-600" />
                        </div>
                        <h3 class="text-xl font-semibold mb-2 ml-4">{{ feature.title }}</h3>
                    </div>

                    <p class="text-gray-600 w-80 md:w-60">{{ feature.description }}</p>
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