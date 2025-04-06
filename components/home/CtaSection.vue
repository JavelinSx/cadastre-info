<template>
    <section class="py-16 bg-primary-600 text-white relative overflow-hidden">
        <!-- Анимированный фоновый эффект -->
        <div class="absolute inset-0 z-0">
            <div class="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary-500 opacity-30 animate-float"
                style="animation-delay: 0s;"></div>
            <div class="absolute top-20 -left-20 w-40 h-40 rounded-full bg-primary-700 opacity-20 animate-float"
                style="animation-delay: 1s;"></div>
            <div class="absolute bottom-10 right-20 w-32 h-32 rounded-full bg-primary-800 opacity-20 animate-float"
                style="animation-delay: 2s;"></div>
        </div>

        <div class="container-custom text-center relative z-10">
            <div v-motion :initial="{ opacity: 0, scale: 0.9 }"
                :enter="{ opacity: 1, scale: 1, transition: { duration: 800 } }">
                <h2 class="text-3xl font-bold mb-4">Готовы начать?</h2>
                <p class="text-xl mb-8 max-w-3xl mx-auto">
                    Оставьте заявку прямо сейчас и мы свяжемся с вами в ближайшее время
                </p>
                <UButton to="/request" variant="outline"
                    class="text-white backdrop-blur-sm bg-white/10 hover:bg-white/20 transform transition-all duration-300 hover:scale-105 hover:shadow-glow"
                    size="xl">
                    <span class="relative z-10">Оставить заявку</span>
                </UButton>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes float {
    0% {
        transform: translateY(0) rotate(0);
    }

    50% {
        transform: translateY(-20px) rotate(5deg);
    }

    100% {
        transform: translateY(0) rotate(0);
    }
}

.animate-float {
    animation: float 12s ease-in-out infinite;
}

.hover\:shadow-glow:hover {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}
</style>