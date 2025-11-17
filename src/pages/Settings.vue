<script setup lang="ts">
import GlobalContainer from "@/components/common/GlobalContainer.vue";
</script>

<template>
  <GlobalContainer class="space-y-8">
    <header class="text-left">
      <h1 class="text-3xl font-bold mb-2 pt-8">설정</h1>
      <p class="text-gray-600">프로필 정보를 관리해보세요.</p>
    </header>

    <!-- 프로필 폼 -->
    <section
      class="bg-white p-8 border rounded-lg shadow-sm space-y-6 text-left"
    >
      <div>
        <label class="font-medium">이름</label>
        <input
          class="w-full mt-1 px-3 py-3 border rounded"
          placeholder="홍길동"
        />
      </div>

      <div>
        <label class="font-medium">이메일</label>
        <input
          class="w-full mt-1 px-3 py-3 border rounded"
          placeholder="example@gmail.com"
        />
      </div>

      <div class="flex justify-center pt-2">
        <button
          class="px-6 py-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700"
        >
          저장
        </button>
      </div>
    </section>
  </GlobalContainer>
</template>
