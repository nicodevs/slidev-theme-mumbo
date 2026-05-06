<script setup lang="ts">
defineProps<{
  src?: string
  side?: 'tl' | 'tr' | 'bl' | 'br'
}>()
</script>

<template>
  <div v-if="src" :class="['mumbo-polaroid size-28', side || 'tr']">
    <div class="mumbo-polaroid-frame" />
    <img class="mumbo-polaroid-logo" :src="src" alt="" />
  </div>
</template>
