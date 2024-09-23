<template>
  <div class="flex flex-col min-h-screen">
    <div class="__background-gradient flex flex-col flex-1">
      <header>
        <Header />
      </header>
      <main class="flex flex-col flex-1">
        <slot />
      </main>
    </div>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script setup>
  import Header  from '/components/layout/Header.vue';
  import Footer from '/components/layout/Footer.vue'

</script>

<style scoped>
.__background-gradient {
  background-image: linear-gradient(to bottom left, #F5821F, #E7C059, #F5821F);
}
</style>

