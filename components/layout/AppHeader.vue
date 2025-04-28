<template>
    <header class="bg-white shadow-sm sticky top-0 z-101 flex justify-center">
        <div class="container-custom py-4 px-4 lg:px-8">
            <div class="flex justify-between items-center">
                <!-- Логотип слева -->
                <NuxtLink to="/"
                    class="flex-shrink-0 flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
                    <UIcon name="i-heroicons-map" class="text-primary-600 w-8 h-8" />
                    <span class="text-xl font-bold text-primary-600">ПлесКад</span>
                </NuxtLink>

                <!-- Навигация по центру -->
                <div class="flex-1 flex justify-center">
                    <nav class="hidden lg:flex space-x-6">
                        <NuxtLink v-for="(link, index) in navLinks" :key="link.path" :to="link.path"
                            class="text-primary-600 hover:text-gray-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-600 after:transition-all after:duration-300 hover:after:w-full"
                            :class="{ 'animate-slideFromTop delay-100': true, [`delay-${index * 100}`]: true }">
                            {{ link.title }}
                        </NuxtLink>
                    </nav>
                </div>

                <!-- Поиск и кнопка бургер-меню справа -->
                <div class="flex items-center space-x-3">
                    <!-- Компонент поиска -->
                    <SearchDialog button-text="Поиск по сайту" input-placeholder="Введите запрос..."
                        :show-keyboard-hints="true" />

                    <!-- Кнопка бургер-меню на мобильных -->
                    <div class="lg:hidden">
                        <UButton :icon="isMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" variant="ghost"
                            @click="toggleMenu"
                            class="transition-all duration-600 hover:bg-primary-500 hover:text-white hover:cursor-pointer z-50 relative" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Мобильное меню -->
        <div v-if="isMenuOpen"
            class="fixed inset-0 bg-gray-100 z-40 lg:hidden flex flex-col overflow-y-auto pt-20 pb-6 px-6">
            <div class="flex flex-col space-y-2">
                <NuxtLink v-for="(link, index) in navLinks" :key="link.path" :to="link.path"
                    class="flex items-center py-3 px-4 rounded-lg text-primary-600 transition-all duration-400 animate-fadeInUp hover:bg-primary-500 hover:text-white transform"
                    :class="{ 'animate-fadeInRight': isMenuOpen }" :style="`animation-delay: ${index * 100}ms`"
                    @click="closeMenu">
                    <UIcon :name="getIconForLink(link.title)" class="w-6 h-6 mr-3 " />
                    <span class="text-lg font-medium">{{ link.title }}</span>
                </NuxtLink>

                <!-- Поиск в мобильном меню -->
                <UButton icon="i-heroicons-magnifying-glass"
                    class="justify-center text-primary-600 border border-primary-400 bg-inherit mt-2 py-3 text-center font-medium transition-all duration-600 animate-fadeInUp shadow-md hover:bg-primary-500 hover:text-white"
                    :style="`animation-delay: ${(navLinks.length + 1) * 100}ms`" @click="openMobileSearch">
                    <!-- <UIcon name="i-heroicons-magnifying-glass" class="w-6 h-6 mr-3" /> -->
                    Поиск по сайту
                </UButton>

                <!-- Кнопка оставить заявку -->
                <UButton to="/request" block icon="i-heroicons-document-text"
                    class="text-primary-600 border border-primary-400 bg-inherit mt-2 py-3 text-center font-medium transition-all duration-600 animate-fadeInUp shadow-md hover:bg-primary-500 hover:text-white"
                    :style="`animation-delay: ${(navLinks.length + 2) * 100}ms`" @click="closeMenu">
                    Оставить заявку
                </UButton>

                <div class="mt-auto pt-8 flex justify-center space-x-6 animate-fadeIn"
                    :style="`animation-delay: ${(navLinks.length + 3) * 100}ms`">
                    <a href="tel:+71234567890" class="relative flex justify-center items-center w-10 h-10 rounded-full 
             text-primary-600 overflow-hidden group">
                        <span class="absolute bottom-0 left-0 w-full h-0 bg-primary-600 
                  transition-all duration-500 group-hover:h-full z-0"></span>
                        <UIcon name="i-heroicons-phone" class="w-6 h-6 relative z-10 transition-colors duration-500 
                                            group-hover:text-white" />
                    </a>
                    <a href="mailto:info@cadastre-info.ru" class="relative flex justify-center items-center w-10 h-10 rounded-full 
                      text-primary-600 overflow-hidden group">
                        <span class="absolute bottom-0 left-0 w-full h-0 bg-primary-600 
                          transition-all duration-500 group-hover:h-full z-0"></span>
                        <UIcon name="i-heroicons-envelope" class="w-6 h-6 relative z-10 transition-colors duration-500 
                          group-hover:text-white" />
                    </a>
                    <a href="#" class="relative flex justify-center items-center w-10 h-10 rounded-full 
                      text-primary-600 overflow-hidden group">
                        <span class="absolute bottom-0 left-0 w-full h-0 bg-primary-600 
                          transition-all duration-500 group-hover:h-full z-0"></span>
                        <UIcon name="i-heroicons-map-pin" class="w-6 h-6 relative z-10 transition-colors duration-500 
                          group-hover:text-white" />
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSearch } from '~/composables/useSearch';
import SearchDialog from '../search/SearchDialog.vue';

const isMenuOpen = ref(false);
const { openSearch } = useSearch();

const navLinks = [
    { title: 'Главная', path: '/' },
    { title: 'Услуги', path: '/services' },
    { title: 'Информация', path: '/information' },
    { title: 'Блог', path: '/blog' },
    { title: 'О нас', path: '/about' },
    { title: 'Контакты', path: '/contacts' }
];

// Функция для выбора иконки в зависимости от названия пункта меню
const getIconForLink = (title: string) => {
    const iconMap: Record<string, string> = {
        'Главная': 'i-heroicons-home',
        'Услуги': 'i-heroicons-wrench-screwdriver',
        'Информация': 'i-heroicons-information-circle',
        'Блог': 'i-heroicons-newspaper',
        'О нас': 'i-heroicons-users',
        'Контакты': 'i-heroicons-phone'
    };

    return iconMap[title] || 'i-heroicons-chevron-right';
};

// Переключение состояния меню
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;

    // Блокируем прокрутку страницы при открытом меню
    if (isMenuOpen.value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};

// Закрытие меню
const closeMenu = () => {
    isMenuOpen.value = false;
    document.body.style.overflow = '';
};

// Открытие поиска из мобильного меню
const openMobileSearch = () => {
    // Сначала закрываем меню
    closeMenu();

    // Затем с небольшой задержкой открываем поиск
    setTimeout(() => {
        openSearch();
    }, 300);
};

// Очистка при размонтировании компонента
onBeforeUnmount(() => {
    document.body.style.overflow = '';
});
</script>

<style scoped>
.container-custom {
    width: 100%;
}

@keyframes slideFromTop {
    from {
        transform: translateY(-20px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.animate-slideFromTop {
    animation: slideFromTop 0.5s ease-out forwards;
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.animate-fadeInRight {
    animation: fadeInRight 0.5s ease-out forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeInUp {
    animation: fadeInUp 0.5s ease-out forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
}
</style>