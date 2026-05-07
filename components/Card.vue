<script setup lang="ts">
defineProps<{
  accent?: string
  number?: string | number
}>()
</script>

<template>
  <div
    class="mumbo-cards-item"
    :style="accent ? { '--mumbo-card-accent': accent } : undefined"
    :data-n="number"
  >
    <slot />
  </div>
</template>
