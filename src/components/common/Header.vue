<script setup lang="ts"></script>
defineEmits(["open-menu"]);

<template>
  <header class="w-full h-16 bg-white border-b flex items-center px-6 gap-8">
    <!-- 로고 -->
    <RouterLink to="/" class="text-xl px-3 font-semibold"
      >반응형 연습</RouterLink
    >

    <!-- 햄버거 버튼 여백 길이 조정 -->
    <div class="flex-1 md:hidden"></div>

    <!-- PC 이상에서만 보이는 네비-->
    <nav class="hidden md:flex gap-6 text-gray-700 font-medium pt-1">
      <RouterLink to="/" class="hover:text-blue-600">홈</RouterLink>
      <RouterLink to="/dashboard" class="hover:text-blue-600"
        >대시보드</RouterLink
      >
      <RouterLink to="/settings" class="hover:text-blue-600">설정</RouterLink>
    </nav>

    <!-- 모바일용 햄버거 버튼 -->
    <button
      class="md:hidden p-2 rounded hover:bg-gray-100 text-gray-700 ml-4"
      type="button"
      @click="$emit('open-menu')"
    >
      ☰
    </button>
  </header>
</template>
