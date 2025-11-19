<script setup lang="ts">
import { ref, onMounted } from "vue";

import GlobalContainer from "@/components/common/GlobalContainer.vue";
import StatsGrid from "@/components/layouts/StatsGrid.vue";
import StatsCard from "@/components/cards/StatsCard.vue";
import ChartCard from "@/components/charts/cards/ChartCard.vue";
import SalesChart from "@/components/charts/SalesChart.vue";

interface DashboardChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor?: string;
    backgroundColor?: string;
    tension?: number;
  }[];
}

interface DashboardResponse {
  sales: number; // 매출
  conversionRate: number; // 전환율
  avgStay: string; // 평균 체류시간 (문자열로)
  chart: DashboardChartData;
}

const loading = ref(true);
const error = ref<string | null>(null);

const stats = ref({
  sales: 0,
  conversionRate: 0,
  avgStay: "",
});

const chartData = ref<DashboardChartData | null>(null);

async function loadDashboardDetail() {
  try {
    const res = await fetch("/api/dashboard-detail.json");
    if (!res.ok) throw new Error("API 호출 실패");

    const json: DashboardResponse = await res.json();

    stats.value = {
      sales: json.sales,
      conversionRate: json.conversionRate,
      avgStay: json.avgStay,
    };

    chartData.value = json.chart;
  } catch (err: any) {
    error.value = err?.message ?? "알 수 없는 오류";
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  loadDashboardDetail();
});
</script>

<template>
  <GlobalContainer class="space-y-8">
    <header class="text-left">
      <h1 class="text-3xl font-bold mb-2 pt-8">대시보드</h1>
      <p class="text-gray-600">각종 통계 정보를 한눈에 확인할 수 있어요.</p>
    </header>

    <!-- 로딩 상태-->
    <div v-if="loading" class="text-gray-500">데이터 불러오는 중...</div>

    <!-- 에러 상태-->
    <div v-else-if="error" class="text-red-500">
      {{ error }}
    </div>

    <!-- 정상 상태-->
    <template v-else>
      <StatsGrid :cols="3">
        <StatsCard
          label="매출"
          :value="`₩${stats.sales.toLocaleString()}원`"
          to="/sales"
        />

        <StatsCard
          label="전환율"
          :value="`${stats.conversionRate}%`"
          to="/conversion"
        />

        <StatsCard
          label="평균 체류시간"
          :value="stats.avgStay"
          to="/avg-stay"
        />
      </StatsGrid>

      <ChartCard>
        <SalesChart v-if="chartData" :external-data="chartData" />
      </ChartCard>
    </template>
  </GlobalContainer>
</template>
