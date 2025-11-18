<script setup lang="ts">
import { computed, ref } from "vue";
import GlobalContainer from "@/components/common/GlobalContainer.vue";

const name = ref("");
const email = ref("");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 이메일 형식 틀린 상태 판단
const isEmailInvalid = computed(() => {
  return email.value.trim() !== "" && !emailPattern.test(email.value.trim());
});

// 전체 폼 유효성 검사
const isValid = computed(() => {
  const validName = name.value.trim() !== "";
  const validEmail = emailPattern.test(email.value.trim());
  return validName && validEmail;
});

// 콘솔 로그
function saveProfile() {
  console.log("이름:", name.value);
  console.log("이메일:", email.value);
}
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
          v-model="name"
          class="w-full mt-1 px-3 py-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="김도연"
        />
      </div>

      <div>
        <label class="font-medium">이메일</label>
        <input
          v-model="email"
          :class="[
            'w-full mt-1 px-3 py-3 border rounded focus:outline-none',
            isEmailInvalid
              ? 'border-red-500 ring-1 ring-red-500'
              : 'border-gray-300 focus:ring-2 focus:ring-blue-500',
          ]"
          placeholder="example@gmail.com"
        />
      </div>

      <div class="flex justify-center pt-2">
        <button
          :disabled="!isValid"
          @click="saveProfile"
          class="px-6 py-3 bg-blue-600 text-white rounded font-semibols hover:bg-blue-700 disabled:bg-gray-300 disabled:cusor-not-allowd"
        >
          저장
        </button>
      </div>
    </section>
  </GlobalContainer>
</template>
