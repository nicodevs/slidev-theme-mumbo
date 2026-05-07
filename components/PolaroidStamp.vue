<script setup lang="ts">
import type { StampSide } from '../types'

defineProps<{
  src?: string
  side?: StampSide
}>()
</script>

<template>
  <div v-if="src" :class="['mumbo-polaroid size-28', side || 'tr']">
    <div class="mumbo-polaroid-frame" />
    <img class="mumbo-polaroid-logo" :src="src" alt="" />
  </div>
</template>
