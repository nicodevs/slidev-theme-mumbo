<script setup lang="ts">
defineProps<{
  color?: string
  label?: string | number
  text?: string
}>()
</script>

<template>
  <div
    class="mumbo-cards-item"
    :style="color ? { '--mumbo-card-color': color } : undefined"
    :data-label="label"
  >
    <slot>{{ text }}</slot>
  </div>
</template>
