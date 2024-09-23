<template>
  <button
    class="w-fit min-w-28 min-h-10 bg-secondary flex items-center justify-center rounded-15 hover:opacity-85 transition-opacity text-primary-text text-base font-bold"
    @click="handleClick"
  >
    {{ text }}
  </button>
</template>

<script setup>
const emit = defineEmits(["clicked"]);
const props = defineProps({
  text: String,
});

const handleClick = () => {
  emit("clicked");
};
</script>

<style></style>
