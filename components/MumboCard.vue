<script setup lang="ts">
defineProps<{
  accent?: string
  n?: string | number
}>()
</script>

<template>
  <div
    class="mumbo-cards-item"
    :style="accent ? { '--mumbo-card-accent': accent } : undefined"
    :data-n="n"
  >
    <slot />
  </div>
</template>
