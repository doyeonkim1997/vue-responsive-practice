<script setup lang="ts">
defineProps({
  open: Boolean,
});

defineEmits(["close"]);
</script>

<template>
  <!-- 오픈 상태일 때만 렌더링 -->
  <div v-if="open" class="lg:hidden fixed inset-0 z-50">
    <!-- 배경 오버레이 -->
    <div class="fixed inset-0 bg-black/40" @click="$emit('close')"></div>

    <!-- 슬라이드 메뉴 -->
    <aside
      class="fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-4 animate-slide-in"
    >
      <button
        class="mb-4 px-3 py-2 bg-gray-100 rounded w-full"
        @click="$emit('close')"
      >
        닫기
      </button>

      <nav class="flex flex-col gap-2">
        <RouterLink
          to="/"
          class="px-3 py-2 rounded hover:bg-gray-100"
          @click="$emit('close')"
          >홈</RouterLink
        >
        <RouterLink
          to="/dashboard"
          class="px-3 py-2 rounded hover:bg-gray-100"
          @click="$emit('close')"
          >대시보드</RouterLink
        >
        <RouterLink
          to="/settings"
          class="px-3 py-2 rounded hover:bg-gray-100"
          @click="$emit('close')"
          >설정</RouterLink
        >
      </nav>
    </aside>
  </div>
</template>
<style scoped>
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.animate-slide-in {
  animation: slideIn 0.25s ease-out;
}
</style>
