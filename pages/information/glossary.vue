<template>
    <div class="py-16 bg-gray-50 text-gray-800">
        <div class="container-custom">
            <!-- Заголовок страницы -->
            <InfoHeader :title="data.title" :description="data.description" :introText="data.introText" />

            <!-- Поиск по терминам -->
            <div class="max-w-3xl mx-auto mb-10">
                <div class="relative" v-motion :initial="{ opacity: 0, y: 10 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }">
                    <input type="text" v-model="searchQuery" placeholder="Поиск термина..."
                        class="w-full py-3 px-4 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                    <UIcon name="i-heroicons-magnifying-glass" class="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                </div>
            </div>

            <!-- Алфавитные табы -->
            <div class="max-w-6xl mx-auto mb-8" v-motion :initial="{ opacity: 0, y: 10 }"
                :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }">
                <div class="flex flex-wrap justify-center gap-2">
                    <button v-for="letter in data.alphabet" :key="letter" @click="selectedLetter = letter"
                        class="w-10 h-10 rounded-full flex items-center justify-center text-lg border transition-all duration-200"
                        :class="letter === selectedLetter ? 'bg-primary-600 text-white border-primary-600' : 'text-gray-700 border-gray-300 hover:bg-gray-100'">
                        {{ letter }}
                    </button>
                    <button @click="selectedLetter = ''"
                        class="px-4 py-2 rounded-full flex items-center justify-center text-sm border transition-all duration-200"
                        :class="selectedLetter === '' ? 'bg-primary-600 text-white border-primary-600' : 'text-gray-700 border-gray-300 hover:bg-gray-100'">
                        Все термины
                    </button>
                </div>
            </div>

            <!-- Список терминов -->
            <div class="max-w-6xl mx-auto">
                <div class="bg-white rounded-lg shadow-md p-8" v-motion :initial="{ opacity: 0, y: 20 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }">
                    <div v-if="filteredTerms.length === 0" class="text-center py-10">
                        <UIcon name="i-heroicons-magnifying-glass" class="w-16 h-16 mx-auto text-gray-300 mb-4" />
                        <h3 class="text-xl font-medium text-gray-600">Термины не найдены</h3>
                        <p class="text-gray-500 mt-2">Попробуйте изменить поисковый запрос или выберите другую букву</p>
                    </div>

                    <div v-else>
                        <dl class="space-y-8">
                            <div v-for="(term, index) in filteredTerms" :key="index"
                                class="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0">
                                <dt class="text-xl font-semibold text-gray-800 mb-2">{{ term.term }}</dt>
                                <dd class="text-gray-600">{{ term.definition }}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            <!-- Полезные ссылки -->
            <div class="max-w-6xl mx-auto mt-12" v-if="data.relatedLinks.length > 0">
                <div class="bg-white rounded-lg shadow-md p-8" v-motion :initial="{ opacity: 0, y: 20 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }">
                    <div v-for="(category, catIndex) in data.relatedLinks" :key="catIndex" class="mb-8 last:mb-0">
                        <h3 class="text-xl font-semibold mb-4 text-gray-800">{{ category.title }}</h3>
                        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <NuxtLink v-for="(link, linkIndex) in category.links" :key="linkIndex" :to="link.url"
                                class="flex items-center p-3 rounded-md border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300">
                                <UIcon :name="link.icon" class="w-5 h-5 text-primary-600 mr-3" />
                                <span class="text-gray-700">{{ link.text }}</span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CTA блок -->
            <div class="max-w-4xl mx-auto mt-12" v-motion :initial="{ opacity: 0, y: 20 }"
                :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }">
                <div class="bg-primary-50 rounded-lg shadow-md p-8 border border-primary-100 text-center">
                    <h3 class="text-2xl font-bold mb-3 text-gray-800">{{ data.contactCta.title }}</h3>
                    <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
                        {{ data.contactCta.description }}
                    </p>
                    <UButton :to="data.contactCta.buttonLink" color="primary" variant="solid" size="lg"
                        class="transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        {{ data.contactCta.buttonText }}
                    </UButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { glossaryData } from '~/utils/data/information';
import InfoHeader from '~/components/information/InfoHeader.vue';
import type { Term } from '~/utils/types/information-types';

const data = ref(glossaryData);
const selectedLetter = ref('');
const searchQuery = ref('');

// Отфильтрованные термины в зависимости от выбранной буквы и поискового запроса
const filteredTerms = computed(() => {
    let terms = data.value.terms;

    // Фильтрация по букве
    if (selectedLetter.value) {
        terms = terms.filter(term => term.term.startsWith(selectedLetter.value));
    }

    // Фильтрация по поисковому запросу
    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        terms = terms.filter(term =>
            term.term.toLowerCase().includes(query) ||
            term.definition.toLowerCase().includes(query)
        );
    }

    return terms;
});

definePageMeta({
    title: 'Словарь кадастровых терминов',
    description: 'Пояснения основных терминов и определений в сфере кадастра и недвижимости, используемых в кадастровой деятельности.'
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
</style>