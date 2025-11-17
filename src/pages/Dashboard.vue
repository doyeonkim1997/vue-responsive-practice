<script setup lang="ts">
import SalesChart from "@/components/charts/SalesChart.vue";
import GlobalContainer from "@/components/common/GlobalContainer.vue";
import StatsCard from "@/components/cards/StatsCard.vue";
import ChartCard from "@/components/charts/cards/ChartCard.vue";
import StatsGrid from "@/components/layouts/StatsGrid.vue";
</script>

<template>
  <GlobalContainer class="space-y-8">
    <header class="text-left">
      <h1 class="text-3xl font-bold mb-2 pt-8">대시보드</h1>
      <p class="text-gray-600">각종 통계 정보를 한눈에 확인할 수 있어요.</p>
    </header>

    <StatsGrid>
      <StatsCard label="매출" value="₩1,230,000원" />
      <StatsCard label="전환율" value="3.4%" />
      <StatsCard label="평균 체류시간" value="2m 45s" />
    </StatsGrid>

    <ChartCard>
      <SalesChart />
    </ChartCard>
  </GlobalContainer>
</template>
