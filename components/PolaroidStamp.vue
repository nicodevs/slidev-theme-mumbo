<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { StampSide } from '../types'

const props = defineProps<{
  url?: string
  emoji?: string
  icon?: string
  position?: StampSide
}>()

const resolvedUrl = computed(() => {
  if (!props.url) return ''
  if (props.url.startsWith('/')) {
    return `${import.meta.env.BASE_URL}${props.url.slice(1)}`
  }
  return props.url
})

const hasContent = computed(() => Boolean(props.url || props.emoji || props.icon))
</script>

<template>
  <div v-if="hasContent" :class="['mumbo-polaroid size-28', position || 'tr']">
    <div class="mumbo-polaroid-frame" />
    <img v-if="url" class="mumbo-polaroid-logo" :src="resolvedUrl" alt="" />
    <Icon v-else-if="icon" class="mumbo-polaroid-icon" :icon="icon" />
    <span v-else-if="emoji" class="mumbo-polaroid-emoji">{{ emoji }}</span>
  </div>
</template>
