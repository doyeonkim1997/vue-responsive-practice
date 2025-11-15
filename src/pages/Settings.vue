<script setup lang="ts"></script>

<template>
  <div class="max-w-screen-xl mx-auto px-6 space-y-8 transition-none">
    <header class="text-left">
      <h1 class="text-3xl font-bold mb-2 pt-8">설정</h1>
      <p class="text-gray-600">프로필 정보를 관리해보세요.</p>
    </header>

    <!-- 프로필 폼 -->
    <section
      class="bg-white p-6 border rounded-lg shadow-sm space-y-4 text-left"
    >
      <div>
        <label class="font-medium">이름</label>
        <input
          class="w-full mt-1 px-3 py-2 border rounded"
          placeholder="홍길동"
        />
      </div>

      <div>
        <label class="font-medium">이메일</label>
        <input
          class="w-full mt-1 px-3 py-2 border rounded"
          placeholder="example@gmail.com"
        />
      </div>

      <button class="px-4 py-2 bg-blue-600 text-white rounded justify-center">
        저장
      </button>
    </section>
  </div>
</template>
