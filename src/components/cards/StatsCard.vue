<script setup lang="ts">
import { RouterLink } from "vue-router";

interface Props {
  label: string;
  value: string | number;
  to?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <RouterLink v-if="props.to" :to="props.to" class="block focus:outline-none">
    <div class="bg-white p-5 rounded-lg shadow-sm border cursor-pointer">
      <h2 class="text-lg mb-2">{{ props.label }}</h2>
      <p class="text-2xl font-semibold">
        {{ props.value }}
      </p>
    </div>
  </RouterLink>
  <div v-else class="bg-white p-5 rounded-lg shadow-sm border">
    <h2 class="text-lg mb-2">{{ props.label }}</h2>
    <p class="text-2xl font-semibold">
      {{ props.value }}
    </p>
  </div>
</template>
