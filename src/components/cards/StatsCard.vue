<script setup lang="ts">
interface Props {
  label: string;
  value: string | number;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="bg-white p-5 rounded-lg shadow-sm border">
    <h2 class="text-lg mb-2">{{ props.label }}</h2>
    <p class="text-2xl font-semibold">
      {{ props.value }}
    </p>
  </div>
</template>
