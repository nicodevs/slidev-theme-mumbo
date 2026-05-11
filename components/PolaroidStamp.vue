<script setup lang="ts">
import { computed } from 'vue'
import type { StampSide } from '../types'

const props = defineProps<{
  url?: string
  position?: StampSide
}>()

const resolvedUrl = computed(() => {
  if (!props.url) return ''
  if (props.url.startsWith('/')) {
    return `${import.meta.env.BASE_URL}${props.url.slice(1)}`
  }
  return props.url
})
</script>

<template>
  <div v-if="url" :class="['mumbo-polaroid size-28', position || 'tr']">
    <div class="mumbo-polaroid-frame" />
    <img class="mumbo-polaroid-logo" :src="resolvedUrl" alt="" />
  </div>
</template>
