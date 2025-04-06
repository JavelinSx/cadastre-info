<template>
    <header class="bg-white shadow-sm sticky top-0 z-10">
        <div class="container-custom py-4">
            <div class="flex justify-between items-center">
                <NuxtLink to="/" class="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
                    <UIcon name="i-heroicons-map" class="text-primary-600 w-8 h-8" />
                    <span class="text-xl font-bold text-gray-900">КадастроИнфо</span>
                </NuxtLink>

                <nav class="hidden md:flex space-x-8">
                    <NuxtLink v-for="(link, index) in navLinks" :key="link.path" :to="link.path"
                        class="text-gray-700 hover:text-primary-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-600 after:transition-all after:duration-300 hover:after:w-full"
                        :class="{ 'animate-slideFromTop delay-100': true, [`delay-${index * 100}`]: true }">
                        {{ link.title }}
                    </NuxtLink>
                </nav>

                <div class="hidden md:block">
                    <UButton to="/request" color="primary" variant="solid" icon="i-heroicons-document-text"
                        class="text-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105" size="xl">
                        Оставить заявку
                    </UButton>
                </div>

                <div class="md:hidden">
                    <UButton icon="i-heroicons-bars-3" color="gray" variant="ghost" @click="isMenuOpen = !isMenuOpen"
                        class="transition-transform duration-300 hover:scale-110" />
                </div>
            </div>
        </div>

        <!-- Мобильное меню -->
        <transition enter-active-class="transition duration-300 ease-out"
            enter-from-class="transform -translate-y-10 opacity-0" enter-to-class="transform translate-y-0 opacity-100"
            leave-active-class="transition duration-200 ease-in" leave-from-class="transform translate-y-0 opacity-100"
            leave-to-class="transform -translate-y-10 opacity-0">
            <div v-if="isMenuOpen" class="md:hidden bg-white shadow-md absolute top-full left-0 right-0 z-20">
                <div class="px-4 py-2 space-y-2">
                    <NuxtLink v-for="(link, index) in navLinks" :key="link.path" :to="link.path"
                        class="block py-2 text-gray-700 hover:text-primary-600 font-medium transform transition-all duration-300 hover:translate-x-2"
                        :style="`transition-delay: ${index * 50}ms`" @click="isMenuOpen = false">
                        {{ link.title }}
                    </NuxtLink>

                    <UButton to="/request" color="primary" variant="solid" icon="i-heroicons-document-text" block
                        class="mt-4 transition-all duration-300 hover:shadow-md">
                        Оставить заявку
                    </UButton>
                </div>
            </div>
        </transition>
    </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);

const navLinks = [
    { title: 'Главная', path: '/' },
    { title: 'Услуги', path: '/services' },
    { title: 'Информация', path: '/information' },
    { title: 'Блог', path: '/blog' },
    { title: 'О нас', path: '/about' },
    { title: 'Контакты', path: '/contacts' }
];
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
</style>