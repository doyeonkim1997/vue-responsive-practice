<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { weeklySales } from "@/mocks/dashboard";
import Chart from "primevue/chart";

interface ChartDataset {
  label: string;
  data: number[];
  borderColor?: string;
  backgroundColor?: string;
  tension?: number;
}

interface ExternalChartData {
  labels: string[];
  datasets: ChartDataset[];
}

const props = defineProps<{
  externalData?: ExternalChartData;
}>();

const chartData = ref<ExternalChartData>();

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  resizeDelay: 50,
  plugins: {
    lagend: {
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
});

// 부모가 데이터 내려주면 그걸로 차트 구성
watch(
  () => props.externalData,
  (val) => {
    if (!val) return;
    chartData.value = val;
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
        label: "매출",
        data: [120, 140, 150, 130, 160, 180, 200],
        borderColor: "#4F46E5",
        tension: 0.4,
      },
      {
        label: "전환율",
        data: [3.1, 3.3, 3.2, 3.4, 3.6, 3.8, 3.7],
        borderColor: "#10B981",
        tension: 0.4,
      },
      {
        label: "평균 체류시간(초)",
        data: [150, 160, 145, 155, 170, 175, 180],
        borderColor: "#F59E0B",
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
