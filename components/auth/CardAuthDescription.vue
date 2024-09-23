<template>
  <div class="p-2">
    <h3 class="text-xlg font-semibold text-secondary-text mb-2">{{ title }}</h3>
    <p class="text-lg text-tertiary-text font-medium">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
});
</script>
