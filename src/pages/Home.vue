<script setup lang="ts">
import { ref, onMounted } from "vue";
import VisitorLineChart from "@/components/charts/VisitorLineChart.vue";
import GlobalContainer from "@/components/common/GlobalContainer.vue";
import StatsCard from "@/components/cards/StatsCard.vue";
import StatsGrid from "@/components/layouts/StatsGrid.vue";
import ChartCard from "@/components/charts/cards/ChartCard.vue";

// 상태 값들 (API 호출 연습)
const loading = ref(true);
const error = ref<string | null>(null);

const stats = ref({
  visitors: 0,
  newUsers: 0,
  errors: 0,
  notifications: 0,
});

const chartData = ref({
  labels: [] as string[],
  data: [] as number[],
});

async function loadDashboard() {
  try {
    const res = await fetch("/api/dashboard.json");
    if (!res.ok) throw new Error("API 호출 실패");

    const json = await res.json();

    stats.value = {
      visitors: json.visitors,
      newUsers: json.newUsers,
      errors: json.errors,
      notifications: json.notifications,
    };

    chartData.value = json.chart;
  } catch (err: any) {
    error.value = err.message ?? "알 수 없는 오류";
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  loadDashboard();
});
</script>

<template>
  <GlobalContainer class="space-y-8">
    <header class="text-left">
      <h1 class="text-3xl font-bold mb-2 pt-8">홈</h1>
      <p class="text-gray-600">각종 통계 정보를 한눈에 확인할 수 있어요.</p>
    </header>

    <!-- 로딩 -->
    <div v-if="loading" class="text-gray-500">데이터 불러오는 중..</div>

    <!-- 에러 -->
    <div v-else-if="error" class="text-red-500">{{ error }}</div>

    <!-- 성공 -->
    <template v-else>
      <StatsGrid :cols="4">
        <StatsCard label="오늘 방문자" :value="stats.visitors + '명'" />
        <StatsCard label="신규 가입자" :value="stats.newUsers + '명'" />
        <StatsCard label="에러 로그" :value="stats.errors + '개'" />
        <StatsCard label="알림 메시지" :value="stats.notifications + '개'" />
      </StatsGrid>

      <ChartCard>
        <VisitorLineChart :external-data="chartData" />
      </ChartCard>
    </template>
  </GlobalContainer>
</template>
