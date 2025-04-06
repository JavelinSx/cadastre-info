<template>
  <div class="py-16 bg-gray-50 min-h-[calc(100vh-200px)] flex items-center">
    <div class="container-custom">
      <div class="max-w-3xl mx-auto">
        <div class="bg-white rounded-lg shadow-md p-8" v-motion 
             :initial="{ opacity: 0, y: 20 }" 
             :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }">
          <div class="mb-6 flex justify-center">
            <div class="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center animate-pulse-slow">
              <UIcon name="i-heroicons-wrench-screwdriver" class="w-12 h-12 text-primary-600" />
            </div>
          </div>
          
          <h1 class="text-3xl font-bold mb-4 animate-fadeIn" style="animation-delay: 300ms">Политика конфиденциальности</h1>
          
          <p class="text-xl text-gray-600 mb-6 animate-fadeIn" style="animation-delay: 500ms">
            Мы активно работаем над созданием этой страницы. Скоро здесь появится полезная информация о кадастровых услугах.
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn" style="animation-delay: 700ms">
            <UButton to="/" color="primary" variant="solid" 
                    class="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <UIcon name="i-heroicons-home" class="mr-2" />
              Вернуться на главную
            </UButton>
            
            <UButton to="/request" color="gray" variant="outline" 
                    class="transition-all duration-300 hover:shadow-md">
              <UIcon name="i-heroicons-document-text" class="mr-2" />
              Оставить заявку
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Политика конфиденциальности - Страница в разработке',
  description: 'Информация об обработке персональных данных'
});
</script>

<style scoped>
.animate-pulse-slow {
  animation: pulse 3s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.animate-fadeIn {
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from { 
    opacity: 0;
    transform: translateY(10px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}
</style>