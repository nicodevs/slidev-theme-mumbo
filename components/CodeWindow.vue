<script setup lang="ts">
import { computed } from 'vue'
import type { StampProps } from '../types'

const props = defineProps<StampProps & {
  title?: string
  size?: string | number
}>()

// Stamps pin to the window's corners, not the slide's
const stamps = computed(() => props.stamp ? (Array.isArray(props.stamp) ? props.stamp : [props.stamp]) : [])

const sizeStyle = props.size != null
  ? { '--mumbo-snippet-size': typeof props.size === 'number' ? `${props.size}em` : props.size }
  : undefined
</script>

<template>
  <div class="mumbo-code-window" :style="sizeStyle">
    <PolaroidStamp v-for="(s, i) in stamps" :key="i" v-bind="s" />
    <div class="mumbo-code-window-bar">
      <span class="mumbo-code-window-dot is-close" />
      <span class="mumbo-code-window-dot is-min" />
      <span class="mumbo-code-window-dot is-max" />
      <span v-if="title" class="mumbo-code-window-title">{{ title }}</span>
    </div>
    <div class="mumbo-code-window-body">
      <slot />
    </div>
  </div>
</template>
