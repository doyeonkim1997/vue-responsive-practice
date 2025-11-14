<template>
  <!-- 
    [수정됨]
    차트를 감싸는 래퍼 div 추가 → 부모 영역에서만 꽉 차도록 제어
  -->
  <div class="relative w-full h-full">
    <Chart
      type="bar"
      :data="chartData"
      :options="chartOptions"
      class="absolute inset-0"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Chart from "primevue/chart";

const chartData = ref({
  labels: ["서버 A", "서버 B", "서버 C", "서버 D"],
  datasets: [
    {
      label: "트래픽",
      data: [140, 90, 120, 200],
      backgroundColor: "#6366F1",
    },
  ],
});

const chartOptions = ref({
  indexAxis: "y",
  responsive: true,
  maintainAspectRatio: false,
  resizeDelay: 50,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: { grid: { display: false } },
    y: { grid: { display: false } },
  },
});
</script>

<style scoped>
/* 
  [삭제됨] 기존 :deep(canvas) 강제 스타일은 제거
  새 구조에선 필요 없음
*/
</style>
