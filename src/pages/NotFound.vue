<script setup lang="ts">
import GlobalContainer from "@/components/common/GlobalContainer.vue";
</script>

<template>
  <GlobalContainer class="space-y-8">
    <div
      class="h-[60vh] flex flex-col items-center justify-center text-gray-600"
    >
      <h1 class="mb-4 text-5xl font-semibold">404</h1>
      <p class="mb-7 text-lg font-normal">페이지를 찾을 수 없습니다.</p>
      <RouterLink to="/" class="text-blue-600">홈으로 돌아가기</RouterLink>
    </div>
  </GlobalContainer>
</template>
