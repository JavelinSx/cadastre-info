<template>
  <UApp>
    <NuxtLayout>
      <div class="page-container">
        <NuxtPage />
      </div>
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
useHead({
  meta: [
    { name: 'application-name', content: 'ПлесКад' },
    { name: 'apple-mobile-web-app-title', content: 'ПлесКад' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'format-detection', content: 'telephone=no' }
  ]
})
onMounted(() => {
  if (import.meta.client) {
    // Добавляем скрипт Яндекс.Метрики
    useHead({
      script: [
        {
          key: 'yandex-metrika',
          innerHTML: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            ym(102633109, "init", {
                 clickmap:true,
                 trackLinks:true,
                 accurateTrackBounce:true
            });
          `,
          type: 'text/javascript'
        }
      ],
      noscript: [
        {
          innerHTML: '<div><img src="https://mc.yandex.ru/watch/102633109" style="position:absolute; left:-9999px;" alt="" /></div>'
        }
      ]
    })
  }
})

// Отслеживание переходов между страницами
const route = useRoute()
watch(() => route.fullPath, (newPath) => {
  if (import.meta.client && (window as any).ym) {
    (window as any).ym(102633109, 'hit', newPath)
  }
})
</script>

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