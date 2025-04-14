<template>
    <header class="bg-white shadow-sm sticky top-0 z-100 px-4">
        <div class="container-custom py-4">
            <div class="flex justify-between items-center">
                <NuxtLink to="/" class="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
                    <UIcon name="i-heroicons-map" class="text-primary-600 w-8 h-8" />
                    <span class="text-xl font-bold text-gray-900">КадастроИнфо</span>
                </NuxtLink>

                <nav class="hidden lg:flex space-x-8">
                    <NuxtLink v-for="(link, index) in navLinks" :key="link.path" :to="link.path"
                        class="text-gray-700 hover:text-primary-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-600 after:transition-all after:duration-300 hover:after:w-full"
                        :class="{ 'animate-slideFromTop delay-100': true, [`delay-${index * 100}`]: true }">
                        {{ link.title }}
                    </NuxtLink>
                </nav>

                <div class="hidden lg:block">
                    <UButton to="/request" color="primary" variant="solid" icon="i-heroicons-document-text"
                        class="text-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105" size="xl">
                        Оставить заявку
                    </UButton>
                </div>

                <div class="lg:hidden">
                    <UButton :icon="isMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" variant="ghost"
                        @click="toggleMenu" class="transition-transform duration-300 hover:scale-110 z-50 relative" />
                </div>
            </div>
        </div>

        <!-- Улучшенное мобильное меню с полноэкранной анимацией -->
        <div v-if="isMenuOpen"
            class="fixed inset-0 bg-white z-40 lg:hidden flex flex-col max-h-[700px] pt-14 pb-6 px-6 shadow-2xl">
            <div class="flex flex-col space-y-4">
                <NuxtLink v-for="(link, index) in navLinks" :key="link.path" :to="link.path"
                    class="flex items-center py-3 px-4 rounded-lg text-gray-800 hover:bg-primary-50 transition-all duration-300 transform"
                    :class="{ 'animate-fadeInRight': isMenuOpen }" :style="`animation-delay: ${index * 100}ms`"
                    @click="closeMenu">
                    <UIcon :name="getIconForLink(link.title)" class="w-6 h-6 mr-3 text-primary-600" />
                    <span class="text-lg font-medium">{{ link.title }}</span>
                </NuxtLink>

                <div class="border-t border-gray-100 my-4 animate-fadeIn"
                    :style="`animation-delay: ${navLinks.length * 100}ms`"></div>

                <UButton to="/request" color="primary" variant="solid" block icon="i-heroicons-document-text"
                    class="mt-2 py-3 text-center text-lg font-medium transition-all duration-300 animate-fadeInUp shadow-md hover:shadow-lg"
                    :style="`animation-delay: ${(navLinks.length + 1) * 100}ms`" @click="closeMenu">
                    Оставить заявку
                </UButton>

                <div class="mt-auto pt-8 flex justify-center space-x-6 animate-fadeIn"
                    :style="`animation-delay: ${(navLinks.length + 2) * 100}ms`">
                    <a href="tel:+71234567890" class="text-gray-600 hover:text-primary-600 transition-colors">
                        <UIcon name="i-heroicons-phone" class="w-6 h-6" />
                    </a>
                    <a href="mailto:info@cadastre-info.ru"
                        class="text-gray-600 hover:text-primary-600 transition-colors">
                        <UIcon name="i-heroicons-envelope" class="w-6 h-6" />
                    </a>
                    <a href="#" class="text-gray-600 hover:text-primary-600 transition-colors">
                        <UIcon name="i-heroicons-map-pin" class="w-6 h-6" />
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);
const bodyEl = ref(null);

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

// Очистка при размонтировании компонента
onBeforeUnmount(() => {
    document.body.style.overflow = '';
});
</script>

<style scoped>
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