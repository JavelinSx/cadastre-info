// composables/useAnimations.ts
import { ref, onMounted } from 'vue';

export function useAnimateOnScroll() {
  const elementRefs = ref([]);

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementRefs.value.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementRefs.value.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  });

  return {
    elementRefs,
  };
}
