<template>
    <div class="py-16 bg-gray-50 text-gray-800">
        <div class="container-custom">
            <!-- Заголовок страницы -->
            <ServiceHeader :title="serviceData.title" :description="serviceData.description" />

            <div class="grid md:grid-cols-3 gap-8">
                <!-- Основная информация -->
                <div class="md:col-span-2">
                    <!-- Используем компонент основной информации -->
                    <ServiceMainInfo :title="serviceData.mainInfo.title" :paragraphs="serviceData.mainInfo.paragraphs"
                        :image="serviceData.mainInfo.image" :sections="serviceData.mainInfo.sections" />

                    <!-- Пример экспликации квартиры -->
                    <div class="bg-white rounded-lg shadow-md p-8 mb-8 mt-10" v-motion :initial="{ opacity: 0, y: 30 }"
                        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }">
                        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Примеры экспликаций</h2>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <!-- Пример 1 -->
                            <div
                                class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                                <h3 class="text-lg font-semibold mb-3 text-primary-700">Экспликация земельного участка
                                </h3>
                                <div class="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                                    <!-- Схема участка - SVG -->
                                    <div class="w-full h-full p-2">
                                        <svg class="w-full h-full" viewBox="0 0 800 600">
                                            <!-- Контур участка -->
                                            <rect x="50" y="50" width="700" height="500" fill="#f3f4f6" stroke="#475569"
                                                stroke-width="4" />

                                            <!-- Жилой дом -->
                                            <rect x="100" y="100" width="350" height="250" fill="#e0f2fe"
                                                stroke="#10b981" stroke-width="2" />
                                            <text x="275" y="225" font-size="20" text-anchor="middle"
                                                fill="#047857">Жилой дом</text>

                                            <!-- Гараж -->
                                            <rect x="100" y="400" width="150" height="100" fill="#dcfce7"
                                                stroke="#10b981" stroke-width="2" />
                                            <text x="175" y="450" font-size="16" text-anchor="middle"
                                                fill="#047857">Гараж</text>

                                            <!-- Баня -->
                                            <rect x="300" y="400" width="150" height="100" fill="#d1fae5"
                                                stroke="#10b981" stroke-width="2" />
                                            <text x="375" y="450" font-size="16" text-anchor="middle"
                                                fill="#047857">Баня</text>

                                            <!-- Сад -->
                                            <rect x="500" y="100" width="200" height="200" fill="#bbf7d0"
                                                stroke="#10b981" stroke-width="2" />
                                            <text x="600" y="200" font-size="16" text-anchor="middle"
                                                fill="#047857">Сад</text>

                                            <!-- Огород -->
                                            <rect x="500" y="350" width="200" height="150" fill="#a7f3d0"
                                                stroke="#10b981" stroke-width="2" />
                                            <text x="600" y="425" font-size="16" text-anchor="middle"
                                                fill="#047857">Огород</text>
                                        </svg>
                                    </div>
                                </div>
                                <div class="space-y-1 text-sm text-gray-600">
                                    <div class="flex justify-between">
                                        <span>Общая площадь участка:</span>
                                        <span class="font-medium">1200 м²</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span>Площадь застройки:</span>
                                        <span class="font-medium">320 м²</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span>Жилой дом:</span>
                                        <span class="font-medium">200 м²</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span>Гараж:</span>
                                        <span class="font-medium">60 м²</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span>Баня:</span>
                                        <span class="font-medium">60 м²</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span>Сад:</span>
                                        <span class="font-medium">400 м²</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span>Огород:</span>
                                        <span class="font-medium">480 м²</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Пример 2 -->
                            <div
                                class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                                <h3 class="text-lg font-semibold mb-3 text-primary-700">Экспликация здания</h3>
                                <div class="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                                    <!-- Схема здания - SVG -->
                                    <div class="w-full h-full p-2">
                                        <svg class="w-full h-full" viewBox="0 0 800 600">
                                            <!-- Контур здания -->
                                            <rect x="50" y="50" width="700" height="500" fill="#f3f4f6" stroke="#475569"
                                                stroke-width="4" />

                                            <!-- Жилое помещение 1 -->
                                            <rect x="100" y="100" width="250" height="200" fill="#e0f2fe"
                                                stroke="#10b981" stroke-width="2" />
                                            <text x="225" y="200" font-size="18" text-anchor="middle"
                                                fill="#047857">Жилое помещение 1</text>

                                            <!-- Жилое помещение 2 -->
                                            <rect x="100" y="350" width="250" height="150" fill="#e0f2fe"
                                                stroke="#10b981" stroke-width="2" />
                                            <text x="225" y="425" font-size="18" text-anchor="middle"
                                                fill="#047857">Жилое помещение 2</text>

                                            <!-- Коридор -->
                                            <rect x="400" y="100" width="100" height="400" fill="#f3e8ff"
                                                stroke="#10b981" stroke-width="2" />
                                            <text x="450" y="300" font-size="18" text-anchor="middle"
                                                fill="#047857">Коридор</text>

                                            <!-- Технические помещения -->
                                            <rect x="550" y="100" width="150" height="400" fill="#dbeafe"
                                                stroke="#10b981" stroke-width="2" />
                                            <text x="625" y="300" font-size="18" text-anchor="middle"
                                                transform="rotate(90, 625, 300)" fill="#047857">Технические
                                                помещения</text>
                                        </svg>
                                    </div>
                                </div>
                                <div class="space-y-1 text-sm text-gray-600">
                                    <div class="flex justify-between">
                                        <span>Общая площадь здания:</span>
                                        <span class="font-medium">350 м²</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span>Жилое помещение 1:</span>
                                        <span class="font-medium">125 м²</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span>Жилое помещение 2:</span>
                                        <span class="font-medium">95 м²</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span>Коридор:</span>
                                        <span class="font-medium">60 м²</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span>Технические помещения:</span>
                                        <span class="font-medium">70 м²</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Используем компонент FAQ -->
                    <ServiceFAQ :title="serviceData.faq.title" :questions="serviceData.faq.questions" />
                </div>

                <!-- Боковая панель -->
                <div class="w-full relative" v-motion :initial="{ opacity: 0, x: 30 }"
                    :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 300 } }">
                    <ServiceSidebar :serviceTypes="serviceData.sidebar.types" :results="serviceData.sidebar.results"
                        :advantages="serviceData.sidebar.advantages" :documents="serviceData.sidebar.documents" />
                </div>
            </div>

            <!-- Используем компонент CTA -->
            <ServiceCTA :title="serviceData.cta.title" :description="serviceData.cta.description"
                :primaryButton="serviceData.cta.buttons.primary" :secondaryButton="serviceData.cta.buttons.secondary" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ServiceSidebar, ServiceHeader, ServiceMainInfo, ServiceFAQ, ServiceCTA } from '~/components/services';
// Импортировать адаптированные данные
import { floorPlanData } from '~/utils/data/services/technical-plans/floor-plan';

definePageMeta({
    title: 'Экспликация объектов недвижимости - Кадастровые услуги',
    description: 'Профессиональные услуги по подготовке экспликации для объектов недвижимости при оформлении технических планов и других документов'
});

// Используем данные из файла
const serviceData = ref(floorPlanData);
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