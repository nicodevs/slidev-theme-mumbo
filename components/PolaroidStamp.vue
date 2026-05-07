<script setup lang="ts">
import type { StampSide } from '../types'

defineProps<{
  url?: string
  position?: StampSide
}>()
</script>

<template>
  <div v-if="url" :class="['mumbo-polaroid size-28', position || 'tr']">
    <div class="mumbo-polaroid-frame" />
    <img class="mumbo-polaroid-logo" :src="url" alt="" />
  </div>
</template>
