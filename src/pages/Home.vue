<script setup lang="ts">
import VisitorLineChart from "@/components/charts/VisitorLineChart.vue";
import GlobalContainer from "@/components/common/GlobalContainer.vue";
import StatsCard from "@/components/cards/StatsCard.vue";
import StatsGrid from "@/components/layouts/StatsGrid.vue";
import ChartCard from "@/components/charts/cards/ChartCard.vue";
</script>

<template>
  <GlobalContainer class="space-y-8">
    <header class="text-left">
      <h1 class="text-3xl font-bold mb-2 pt-8">홈</h1>
      <p class="text-gray-600">각종 통계 정보를 한눈에 확인할 수 있어요.</p>
    </header>

    <StatsGrid>
      <StatsCard label="오늘 방문자" value="1,234명" />
      <StatsCard label="신규 가입자" value="56명" />
      <StatsCard label="에러 로그" value="8개" />
      <StatsCard label="알림 메시지" value="2개" />
    </StatsGrid>

    <ChartCard>
      <VisitorLineChart />
    </ChartCard>
  </GlobalContainer>
</template>
