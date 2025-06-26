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

                    <!-- Пример акта обследования -->
                    <div class="bg-white rounded-lg shadow-md p-8 mb-8 mt-10" v-motion :initial="{ opacity: 0, y: 30 }"
                        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }">
                        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Образец акта обследования</h2>

                        <div class="bg-white rounded-lg border border-gray-200 p-6">
                            <div class="text-center mb-8">
                                <h3 class="text-xl font-bold text-gray-900">АКТ ОБСЛЕДОВАНИЯ ОБЪЕКТА НЕДВИЖИМОСТИ</h3>
                                <p class="text-gray-600 mt-2">г. Плесецк</p>
                                <p class="text-gray-600">15 мая 2025 г.</p>
                            </div>

                            <div class="mb-6">
                                <p class="text-gray-700 mb-2">
                                    Настоящий акт составлен о том, что кадастровым инженером Ивановым И.И. в присутствии
                                    собственника Петрова П.П. произведено обследование объекта недвижимости,
                                    расположенного по адресу: <span class="font-medium">Архангельская область,
                                        Плесецкий район, рп. Плесецк, ул. Ленина, д.30</span>.
                                </p>
                                <p class="text-gray-700">
                                    В результате обследования установлено следующее:
                                </p>
                            </div>

                            <!-- Inspection Details Table -->
                            <div class="overflow-x-auto mb-6">
                                <table class="min-w-full border-collapse border border-gray-300">
                                    <thead>
                                        <tr class="bg-gray-100">
                                            <th class="border border-gray-300 p-2 text-left">Элемент</th>
                                            <th class="border border-gray-300 p-2 text-left">Состояние</th>
                                            <th class="border border-gray-300 p-2 text-left">Примечания</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="border border-gray-300 p-2">Фундамент</td>
                                            <td class="border border-gray-300 p-2">Удовлетворительное</td>
                                            <td class="border border-gray-300 p-2">Имеются незначительные трещины</td>
                                        </tr>
                                        <tr>
                                            <td class="border border-gray-300 p-2">Стены</td>
                                            <td class="border border-gray-300 p-2">Хорошее</td>
                                            <td class="border border-gray-300 p-2">Кирпичные, без видимых повреждений
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="border border-gray-300 p-2">Кровля</td>
                                            <td class="border border-gray-300 p-2">Хорошее</td>
                                            <td class="border border-gray-300 p-2">Металлочерепица, без протечек</td>
                                        </tr>
                                        <tr>
                                            <td class="border border-gray-300 p-2">Окна</td>
                                            <td class="border border-gray-300 p-2">Хорошее</td>
                                            <td class="border border-gray-300 p-2">Пластиковые стеклопакеты</td>
                                        </tr>
                                        <tr>
                                            <td class="border border-gray-300 p-2">Двери</td>
                                            <td class="border border-gray-300 p-2">Хорошее</td>
                                            <td class="border border-gray-300 p-2">Входная - металлическая, межкомнатные
                                                - деревянные</td>
                                        </tr>
                                        <tr>
                                            <td class="border border-gray-300 p-2">Электрика</td>
                                            <td class="border border-gray-300 p-2">Хорошее</td>
                                            <td class="border border-gray-300 p-2">Соответствует нормам</td>
                                        </tr>
                                        <tr>
                                            <td class="border border-gray-300 p-2">Водоснабжение</td>
                                            <td class="border border-gray-300 p-2">Хорошее</td>
                                            <td class="border border-gray-300 p-2">Централизованное, исправно</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <!-- Defects section -->
                            <div class="mb-6">
                                <h4 class="font-bold text-gray-800 mb-2">Выявленные дефекты и повреждения:</h4>
                                <ol class="list-decimal pl-5 text-gray-700">
                                    <li>Незначительные трещины в фундаменте (волосяные, не влияющие на прочность
                                        конструкции).</li>
                                    <li>Следы протечки на потолке в ванной комнате (площадь ≈ 0,3 м²).</li>
                                </ol>
                            </div>

                            <!-- Conclusions section -->
                            <div class="mb-6">
                                <h4 class="font-bold text-gray-800 mb-2">Заключение:</h4>
                                <p class="text-gray-700">
                                    Объект находится в хорошем состоянии, пригоден для проживания. Выявленные
                                    дефекты не влияют на возможность нормальной эксплуатации здания. Инженерные
                                    системы функционируют исправно.
                                </p>
                            </div>

                            <!-- Signatures section -->
                            <div class="mt-10 flex flex-wrap justify-between items-end">
                                <div class="mb-4 md:mb-0">
                                    <p class="text-gray-700">Кадастровый инженер:</p>
                                    <div class="mt-1 border-b border-gray-400 w-48"></div>
                                    <p class="text-sm text-gray-600 mt-1">Иванов И.И.</p>
                                </div>
                                <div>
                                    <p class="text-gray-700">Собственник:</p>
                                    <div class="mt-1 border-b border-gray-400 w-48"></div>
                                    <p class="text-sm text-gray-600 mt-1">Петров П.П.</p>
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
import { inspectionReportData } from '~/utils/data/services/technical-plans/inspection-reports';

definePageMeta({
    title: 'Акт обследования объекта недвижимости - Кадастровые услуги',
    description: 'Профессиональные услуги по составлению акта обследования для объектов недвижимости в целях снятия с кадастрового учета'
});

// Используем данные из файла
const serviceData = ref(inspectionReportData);
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