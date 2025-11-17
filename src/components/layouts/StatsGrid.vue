<script setup lang="ts">
interface Props {
  cols?: number; // 기본 columns
  sm?: number; // small screen breakpoint
  md?: number; // medium
  lg?: number; // large
  xl?: number; // extra large
}

const props = withDefaults(defineProps<Props>(), {
  cols: 1,
  sm: 2,
  md: 3,
  lg: 3,
  xl: 4,
});
</script>

<template>
  <div
    class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full"
  >
    <slot />
  </div>
</template>
