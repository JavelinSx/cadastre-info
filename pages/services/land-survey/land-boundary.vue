<template>
    <div class="py-16 bg-gray-50 text-gray-800">
        <div class="container-custom">
            <!-- Заголовок страницы -->
            <div class="text-center mb-12" v-motion :initial="{ opacity: 0, y: 20 }"
                :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }">
                <h1 class="text-4xl font-bold mb-4 text-gray-800">{{ serviceData.title }}</h1>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    {{ serviceData.description }}
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <!-- Основная информация -->
                <div class="md:col-span-2">
                    <div class="bg-white rounded-lg shadow-md p-8 mb-8" v-motion :initial="{ opacity: 0, x: -30 }"
                        :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }">
                        <h2 class="text-2xl font-semibold mb-4 text-gray-800">{{ serviceData.mainInfo.title }}</h2>

                        <div v-for="(paragraph, index) in serviceData.mainInfo.paragraphs" :key="index"
                            class="text-gray-600 mb-4">
                            <p>{{ paragraph }}</p>
                        </div>

                        <div v-if="serviceData.mainInfo.image" class="mt-6 mb-6">
                            <img :src="serviceData.mainInfo.image.src" :alt="serviceData.mainInfo.image.alt"
                                class="rounded-lg w-full h-64 object-cover shadow-md" />
                        </div>

                        <template v-for="(section, sectionIndex) in serviceData.mainInfo.sections" :key="sectionIndex">
                            <h3 class="text-xl font-semibold mb-3 text-gray-800 mt-8">{{ section.title }}</h3>

                            <ul v-if="section.type === 'list'" class="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                                <li v-for="(item, itemIndex) in section.items" :key="itemIndex">{{ item }}</li>
                            </ul>

                            <ol v-if="section.type === 'numbered'"
                                class="list-decimal pl-6 mb-6 space-y-3 text-gray-600">
                                <li v-for="(item, itemIndex) in section.items" :key="itemIndex">
                                    <span v-if="typeof item === 'object' && item.title" class="font-medium">{{
                                        item.title }}</span>
                                    <span v-if="typeof item === 'object' && item.title && item.description"> — </span>
                                    <span v-if="typeof item === 'object' && item.description">{{ item.description
                                        }}</span>
                                    <span v-if="typeof item !== 'object'">{{ item }}</span>
                                </li>
                            </ol>
                        </template>
                    </div>

                    <!-- Дополнительная информация и FAQ -->
                    <div class="bg-white rounded-lg shadow-md p-8" v-motion :initial="{ opacity: 0, y: 30 }"
                        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }">
                        <h2 class="text-2xl font-semibold mb-4 text-gray-800">{{ serviceData.faq.title }}</h2>

                        <div class="space-y-6">
                            <div v-for="(question, qIndex) in serviceData.faq.questions" :key="qIndex">
                                <h4 class="text-lg font-medium mb-2 text-gray-800">{{ question.question }}</h4>
                                <p class="text-gray-600">
                                    {{ question.answer }}
                                </p>
                                <ul v-if="question.list" class="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                                    <li v-for="(item, itemIndex) in question.list" :key="itemIndex">{{ item }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Боковая панель -->
                <div class="md:col-span-1" v-motion :initial="{ opacity: 0, x: 30 }"
                    :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 300 } }">
                    <div class="md:sticky top-24" style="position: -webkit-sticky;">
                        <!-- Форма заявки -->
                        <div class="bg-white rounded-lg md:shadow-md p-6 mb-8 border border-green-500 md:border-none">
                            <h3 class="text-xl font-semibold mb-4 text-gray-800">Заказать услугу</h3>
                            <p class="text-gray-600 mb-4">
                                Оставьте заявку, и наш специалист свяжется с вами для консультации и расчета стоимости
                            </p>

                            <UButton to="/request" color="primary" variant="solid" block
                                class="transform transition-all duration-300 hover:scale-105 hover:shadow-md mb-4">
                                <UIcon name="i-heroicons-document-text" class="mr-2" />
                                Оставить заявку
                            </UButton>

                            <p class="text-sm text-gray-500 text-center">
                                Или позвоните нам по телефону
                            </p>
                            <p class="text-lg font-medium text-center text-primary-600">
                                +7 (123) 456-78-90
                            </p>
                        </div>

                        <!-- Преимущества -->
                        <div class="bg-white rounded-lg md:shadow-md p-6 mb-8 border border-green-500 md:border-none">
                            <h3 class="text-xl font-semibold mb-4 text-gray-800">{{ serviceData.sidebar.advantages.title
                                }}</h3>

                            <ul class="space-y-3">
                                <li v-for="(advantage, advIndex) in serviceData.sidebar.advantages.items"
                                    :key="advIndex" class="flex items-start p-2 rounded-md">
                                    <UIcon name="i-heroicons-check-circle"
                                        class="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                    <span class="text-gray-600">{{ advantage }}</span>
                                </li>
                            </ul>
                        </div>

                        <!-- Документы -->
                        <div class="bg-white rounded-lg md:shadow-md p-6 border border-green-500 md:border-none">
                            <h3 class="text-xl font-semibold mb-4 text-gray-800">{{ serviceData.sidebar.documents.title
                                }}</h3>

                            <ul class="space-y-3 text-gray-600">
                                <li v-for="(item, itemIndex) in serviceData.sidebar.documents.items" :key="itemIndex"
                                    class="flex items-start p-2">
                                    <UIcon name="i-heroicons-document-text"
                                        class="w-5 h-5 text-primary-600 mr-2 mt-1" />
                                    <span>{{ item }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Блок с призывом к действию -->
            <div class="mt-12 bg-primary-50 p-8 rounded-lg shadow-md border border-primary-100" v-motion
                :initial="{ opacity: 0, y: 30 }"
                :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }">
                <div class="text-center">
                    <h2 class="text-2xl font-bold mb-4 text-gray-800">{{ serviceData.cta.title }}</h2>
                    <p class="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                        {{ serviceData.cta.description }}
                    </p>
                    <div class="flex flex-col sm:flex-row justify-center gap-4">
                        <UButton :to="serviceData.cta.buttons.primary.link" color="primary" variant="solid" size="xl"
                            class="transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            <UIcon name="i-heroicons-document-text" class="mr-2" />
                            {{ serviceData.cta.buttons.primary.text }}
                        </UButton>
                        <UButton :to="serviceData.cta.buttons.secondary.link" color="gray" variant="outline" size="xl"
                            class="transform transition-all duration-300 hover:scale-105">
                            <UIcon name="i-heroicons-phone" class="mr-2" />
                            {{ serviceData.cta.buttons.secondary.text }}
                        </UButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    title: 'Уточнение границ земельного участка - Кадастровые услуги',
    description: 'Профессиональные услуги по уточнению границ земельного участка. Юридически верное определение координат границ земельного участка, оформление межевых планов и регистрация в ЕГРН.'
});

// Динамические данные для страницы
const serviceData = {
    title: 'Уточнение границ земельного участка',
    description: 'Профессиональные услуги по установлению точных границ участка в соответствии с законодательством и регистрации их в ЕГРН',
    mainInfo: {
        title: 'Что такое уточнение границ земельного участка?',
        paragraphs: [
            'Уточнение границ земельного участка — это комплекс кадастровых и геодезических работ, направленных на определение точных координат характерных точек границ земельного участка и внесение этих сведений в Единый государственный реестр недвижимости (ЕГРН).',
            'Процедура уточнения границ необходима в случаях, когда границы участка не установлены в соответствии с требованиями земельного законодательства или сведения о них отсутствуют в ЕГРН. Это особенно актуально для земельных участков, которые были отмежеваны до введения современных требований к точности определения координат или оформлены по старым документам.',
            'Отсутствие точных границ земельного участка в ЕГРН может привести к земельным спорам с соседями, проблемам при проведении сделок с недвижимостью, а также затруднениям при строительстве объектов на участке.'
        ],
        image: {
            src: '/images/services/landPlot/correction.jpg',
            alt: 'Уточнение границ земельного участка'
        },
        sections: [
            {
                title: 'Когда требуется уточнение границ земельного участка?',
                type: 'list',
                items: [
                    'При продаже, дарении или наследовании земельного участка',
                    'При получении разрешения на строительство объектов недвижимости',
                    'При возникновении споров с соседями о фактических границах',
                    'Если в выписке из ЕГРН указано, что границы земельного участка не установлены',
                    'При наличии реестровой ошибки в сведениях о местоположении границ',
                    'Если земельный участок был оформлен до 2008 года (до введения современной системы координат)',
                    'При несоответствии фактических границ и данных в правоустанавливающих документах'
                ]
            },
            {
                title: 'Этапы уточнения границ земельного участка:',
                type: 'numbered',
                items: [
                    {
                        title: 'Подготовительные работы',
                        description: 'сбор и анализ имеющихся документов на земельный участок, получение выписок из ЕГРН, изучение картографических материалов.'
                    },
                    {
                        title: 'Геодезические измерения',
                        description: 'выезд на участок кадастрового инженера, проведение геодезической съемки с помощью специального оборудования, определение координат характерных точек границ.'
                    },
                    {
                        title: 'Согласование границ',
                        description: 'извещение правообладателей смежных участков о проведении процедуры согласования, проведение собрания о согласовании местоположения границ или индивидуальное согласование.'
                    },
                    {
                        title: 'Составление акта согласования',
                        description: 'оформление документа, подтверждающего согласие владельцев смежных участков с установленными границами.'
                    },
                    {
                        title: 'Подготовка межевого плана',
                        description: 'создание технического документа, содержащего информацию об уточняемых границах земельного участка в соответствии с требованиями законодательства.'
                    },
                    {
                        title: 'Подача документов в Росреестр',
                        description: 'предоставление межевого плана и необходимых документов для внесения изменений в сведения ЕГРН.'
                    },
                    {
                        title: 'Получение выписки из ЕГРН',
                        description: 'с обновленными сведениями о границах земельного участка.'
                    }
                ]
            },
            {
                title: 'Особенности процедуры уточнения границ:',
                type: 'list',
                items: [
                    'Уточнение границ проводится без изменения площади участка в правоустанавливающих документах, или с изменением площади в пределах допустимой погрешности (не более чем на 10%)',
                    'При уточнении границ земельного участка его площадь не может быть увеличена за счет земель государственной или муниципальной собственности',
                    'Процедура согласования границ является обязательной для всех смежных землепользователей',
                    'Если владелец смежного участка не явился на согласование границ при надлежащем извещении, границы считаются согласованными',
                    'При наличии споров о местоположении границ участка, они могут быть разрешены в судебном порядке'
                ]
            }
        ]
    },
    faq: {
        title: 'Часто задаваемые вопросы',
        questions: [
            {
                question: 'Сколько времени занимает процедура уточнения границ земельного участка?',
                answer: 'Срок выполнения работ по уточнению границ земельного участка обычно составляет от 14 до 30 рабочих дней. Это включает проведение геодезической съемки, согласование границ с соседями, подготовку межевого плана и внесение сведений в ЕГРН. Сроки могут увеличиться при возникновении споров с соседями или необходимости получения дополнительных документов.'
            },
            {
                question: 'Что делать, если сосед отказывается подписывать акт согласования границ?',
                answer: 'В случае если сосед отказывается подписывать акт согласования границ, у вас есть несколько вариантов действий:',
                list: [
                    'Попытаться урегулировать разногласия путем переговоров',
                    'Провести повторные измерения с приглашением соседа для участия в процессе',
                    'Обратиться в согласительную комиссию при органе местного самоуправления',
                    'Подать исковое заявление в суд об установлении границ земельного участка (в этом случае границы будут установлены на основании решения суда)'
                ]
            },
            {
                question: 'Можно ли провести уточнение границ без согласования с соседями?',
                answer: 'Нет, согласование границ с правообладателями смежных земельных участков является обязательным требованием закона. Однако, существуют случаи, когда границы считаются согласованными без личной подписи соседа:',
                list: [
                    'Если правообладатель смежного участка был надлежащим образом извещен о согласовании границ, но не явился и не представил возражений',
                    'Если в течение 30 дней после получения извещения о проведении собрания по согласованию границ правообладатель не представил обоснованных возражений',
                    'Если вступило в силу решение суда об установлении границ'
                ]
            },
            {
                question: 'Сколько стоит уточнение границ земельного участка?',
                answer: 'Стоимость услуг по уточнению границ земельного участка зависит от множества факторов: площади и конфигурации участка, его местоположения, наличия смежных землепользователей, сложности геодезических работ. Для получения точной информации о стоимости услуги, пожалуйста, оставьте заявку на нашем сайте или свяжитесь с нами по телефону.'
            },
            {
                question: 'Нужно ли уточнять границы, если у меня есть свидетельство о собственности?',
                answer: 'Наличие свидетельства о праве собственности или выписки из ЕГРН подтверждает ваше право на земельный участок, но не гарантирует, что границы участка установлены в соответствии с требованиями законодательства. Если в выписке из ЕГРН указано, что границы не установлены или установлены ориентировочно, рекомендуется провести процедуру уточнения границ для защиты своих прав и предотвращения возможных споров.'
            }
        ]
    },
    sidebar: {
        advantages: {
            title: 'Наши преимущества',
            items: [
                'Работы выполняют опытные кадастровые инженеры с аттестацией',
                'Используем современное геодезическое оборудование с высокой точностью',
                'Гарантия внесения сведений в ЕГРН',
                'Официальный договор с фиксированной стоимостью',
                'Бесплатные консультации на всех этапах работ',
                'Сопровождение до получения результата'
            ]
        },
        documents: {
            title: 'Необходимые документы',
            items: [
                'Паспорт заказчика',
                'Правоустанавливающие документы на земельный участок (свидетельство о праве собственности, выписка из ЕГРН, договор купли-продажи и др.)',
                'Кадастровый паспорт или выписка из ЕГРН (при наличии)',
                'Имеющиеся документы на участок (план, межевое дело и др.)',
                'Доверенность (если действует представитель)'
            ]
        }
    },
    cta: {
        title: 'Нужно уточнить границы вашего земельного участка?',
        description: 'Оставьте заявку, и мы свяжемся с вами для консультации и расчета стоимости работ',
        buttons: {
            primary: {
                text: 'Оставить заявку',
                link: '/request'
            },
            secondary: {
                text: 'Контакты',
                link: '/contacts'
            }
        }
    }
};
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