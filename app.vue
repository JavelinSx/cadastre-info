<template>
  <UApp>
    <NuxtLayout>
      <div class="page-container">
        <NuxtPage />
      </div>
    </NuxtLayout>
  </UApp>
</template>

<style>
.page-container {
  transition: opacity 0.4s, transform 0.4s;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s, transform 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>