<script setup lang="ts">
const props = defineProps<{
  /**
   * 전체 폭을 꽉 쓰고 싶을 때만 true
   * (지금은 안 쓸 거고, 확장성만 열어둠)
   */
  fullWidth?: boolean;
}>();
</script>

<template>
  <div
    :class="[
      // 항상 중앙 정렬 + 기본 좌우 여백
      'mx-auto px-6',
      // 기본은 max-w-screen-xl, fullWidth면 제한 해제
      props.fullWidth ? 'max-w-none' : 'max-w-screen-xl',
    ]"
  >
    <!-- 페이지별 실제 콘텐츠가 들어갈 자리 -->
    <slot />
  </div>
</template>
