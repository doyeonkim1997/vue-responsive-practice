<script setup lang="ts">
import Header from "@/components/common/Header.vue";
import MobileSidebar from "@/components/common/MobileSidebar.vue";
import Footer from "@/components/common/Footer.vue";
import { ref } from "vue";

const isMobileMenuOpen = ref(false);

const openMenu = () => {
  isMobileMenuOpen.value = true;
};

const closeMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<template>
  <MobileSidebar :open="isMobileMenuOpen" @close="closeMenu" />

  <div class="min-h-screen flex flex-col bg-gray-50 overflow-x-hidden">
    <Header @open-menu="openMenu" />

    <div
      class="min-h-screen flex flex-col bg-gray-50 overflow-x-hidden w-full max-w-full"
    >
      <main class="flex-1 p-6">
        <RouterView />
      </main>
    </div>

    <Footer />
  </div>
</template>
