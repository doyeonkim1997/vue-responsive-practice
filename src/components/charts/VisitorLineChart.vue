<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import Chart from "primevue/chart";
import { weeklyVisitors } from "@/mocks/dashboard";

interface ExternalData {
  labels: string[];
  data: number[];
}

const props = defineProps<{
  externalData?: ExternalData;
}>();

const chartData = ref<any>(null);
const chartOptions = ref({
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
});

// 부모가 데이터 내려주면 그걸로 차트 구성
watch(
  () => props.externalData,
  (val) => {
    if (!val) return;

    chartData.value = {
      labels: val.labels,
      datasets: [
        {
          label: "방문자 수",
          data: val.data,
          borderColor: "#10B981",
          tension: 0.4,
        },
      ],
    };
  },
  { immediate: true }
);

// 외부 데이터 없으면 기본 더미 값 사용
onMounted(() => {
  if (props.externalData) return;

  chartData.value = {
    labels: ["월", "화", "수", "목", "금", "토", "일"],
    datasets: [
      {
        label: "방문자 수",
        data: weeklyVisitors,
        borderColor: "#10B981",
        tension: 0.4,
      },
    ],
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
