<template>
  <ElConfigProvider :locale="ptBr">
    <div class="w-full min-h-screen bg-gray-200">
      <!-- <img
      src="/images/login_bg.webp"
      alt="Mulher utilizando notebook"
      class="absolute top-0 left-0 object-cover w-full h-full"
    /> -->
      <div class="absolute w-full h-full z-10">
        <slot />
      </div>
    </div>
  </ElConfigProvider>
</template>

<script setup>
import ptBr from "element-plus/dist/locale/pt-br.min.mjs";
</script>

<style scoped></style>
