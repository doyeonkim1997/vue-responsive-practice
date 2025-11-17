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
        label: "방문자 수",
        data: [120, 180, 90, 150, 200, 170, 210],
        borderColor: "#10B981",
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
      legend: { labels: { color: "#374151" } },
    },
    scales: {
      x: { ticks: { color: "#6B7280" }, grid: { color: "#E5E7EB" } },
      y: { ticks: { color: "#6B7280" }, grid: { color: "#E5E7EB" } },
    },
  };
});
</script>

<template>
  <Chart
    type="line"
    :data="chartData"
    :options="chartOptions"
    class="w-full h-full"
  />
</template>
