<template>
  <!-- 
    [수정됨] 
    차트를 감싸는 div를 추가해서 
    canvas가 부모 영역을 넘지 않도록 제어함
  -->
  <div class="relative w-full h-full">
    <Chart
      type="line"
      :data="chartData"
      :options="chartOptions"
      class="absolute inset-0"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Chart from "primevue/chart";

const chartData = ref();
const chartOptions = ref();

onMounted(() => {
  const labels = ["월", "화", "수", "목", "금", "토", "일"];

  chartData.value = {
    labels,
    datasets: [
      {
        label: "매출",
        data: [120, 140, 150, 130, 160, 180, 200],
        borderColor: "#4F46E5",
        tension: 0.4,
        fill: false,
      },
      {
        label: "전환율",
        data: [3.1, 3.3, 3.2, 3.4, 3.6, 3.8, 3.7],
        borderColor: "#10B981",
        tension: 0.4,
        fill: false,
      },
      {
        label: "신규 회원가입수",
        data: [150, 160, 145, 155, 170, 175, 180],
        borderColor: "#F59E0B",
        tension: 0.4,
        fill: false,
      },
    ],
  };

  chartOptions.value = {
    responsive: true,
    maintainAspectRatio: false,
    resizeDelay: 50,
    plugins: {
      legend: {
        labels: {
          color: "#374151",
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#6B7280" },
        grid: { color: "#E5E7EB" },
      },
      y: {
        ticks: { color: "#6B7280" },
        grid: { color: "#E5E7EB" },
      },
    },
  };
});
</script>

<style scoped>
/* 
  [삭제됨] 기존 !important 강제 덮어쓰기 제거
  :deep(canvas) { width:100% !important; height:100% !important; }
*/
</style>
