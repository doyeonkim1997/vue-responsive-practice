<script setup lang="ts">
import VisitorLineChart from "@/components/charts/VisitorLineChart.vue";
</script>

<template>
  <div class="max-w-screen-xl mx-auto px-6 space-y-8 transition-none">
    <header class="text-left">
      <h1 class="text-3xl font-bold mb-2 pt-8">홈</h1>
      <p class="text-gray-600">각종 통계 정보를 한눈에 확인할 수 있어요.</p>
    </header>

    <!-- 카드 3개 섹션 -->
    <section class="grid grid-cols-1 md:grid-cols-3 gap-6 font-medium">
      <div class="bg-white p-5 rounded-lg shadow-sm border">
        <h2 class="text-lg mb-2">일일 방문수</h2>
        <p class="text-2xl font-semibold">33명</p>
      </div>
      <div class="bg-white p-5 rounded-lg shadow-sm border">
        <h2 class="text-lg mb-2">평균 방문수</h2>
        <p class="text-2xl font-semibold">12명</p>
      </div>
      <div class="bg-white p-5 rounded-lg shadow-sm border">
        <h2 class="text-lg mb-2">신규 회원가입수</h2>
        <p class="text-2xl font-semibold">2명</p>
      </div>
    </section>

    <!-- 차트 -->
    <section
      class="bg-white p-6 rounded-lg shadow-sm border flex items-center justify-center"
    >
      <VisitorLineChart class="flex-1" />
    </section>
  </div>
</template>
