<script setup lang="ts">
interface Props {
  cols?: number; // 데스크탑에서 몇 칼럼인지
}

const props = withDefaults(defineProps<Props>(), {
  cols: 3, // 기본값: 3
});
</script>

<template>
  <div
    class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-[repeat(var(--cols),minmax(0,1fr))] w-full"
    :style="`--cols: ${props.cols}`"
  >
    <slot />
  </div>
</template>
