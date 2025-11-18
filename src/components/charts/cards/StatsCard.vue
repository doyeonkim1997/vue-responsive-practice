<script lang="ts">
interface Props {
  label: string;
  value: string | number;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="bg-white p-5 rounded-lg shadow-sm border flex-1 min-w-[200px]">
    <h2 class="text-lg mb-2 font-semibold">{{ label }}</h2>
    <p class="text-2xl font-bold">{{ value }}</p>
  </div>
</template>
