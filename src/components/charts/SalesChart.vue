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
