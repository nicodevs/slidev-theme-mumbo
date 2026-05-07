<script setup lang="ts">
import type { CoverProps, StampProps } from '../types'

defineProps<CoverProps & StampProps & {
  variant?: 'cover' | 'content'
}>()
</script>

<template>
  <div :class="['mumbo-card', variant === 'content' ? 'is-content' : '']">
    <PolaroidStamp v-if="stamp" :src="stamp" :side="stampSide" />
    <div v-if="tag" class="mumbo-tape">{{ tag }}</div>
    <div v-if="label" class="mumbo-label">{{ label }}</div>
    <h1 v-if="quote" class="mumbo-title is-quote">{{ quote }}</h1>
    <h1 v-else-if="headline" class="mumbo-title">{{ headline }}</h1>
    <slot />
    <div v-if="subtitle" class="mumbo-subtitle">{{ subtitle }}</div>
  </div>
</template>
