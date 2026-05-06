<script setup lang="ts">
defineProps<{
  label?: string | number
  headline?: string
  subtitle?: string
  stamp?: string
  stampSide?: 'tl' | 'tr' | 'bl' | 'br'
  tag?: string
  variant?: 'cover' | 'content'
}>()
</script>

<template>
  <div :class="['mumbo-card', variant === 'content' ? 'is-content' : '']">
    <PolaroidStamp v-if="stamp" :src="stamp" :side="stampSide" />
    <div v-if="tag" class="mumbo-tape">{{ tag }}</div>
    <div v-if="label" class="mumbo-label">{{ label }}</div>
    <h1 v-if="headline" class="mumbo-title">{{ headline }}</h1>
    <slot />
    <div v-if="subtitle" class="mumbo-subtitle">{{ subtitle }}</div>
  </div>
</template>
