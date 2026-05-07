<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  class?: string
  pattern?: string
  backgroundColor?: string
  label?: string | number
  headline?: string
  subtitle?: string
  stamp?: string
  stampSide?: 'tl' | 'tr' | 'bl' | 'br'
}>(), {
  pattern: 'dots',
})

const backgroundStyle = computed(() =>
  props.backgroundColor ? { '--mumbo-bg': props.backgroundColor } : undefined,
)
</script>

<template>
  <div
    class="slidev-layout items"
    :class="[`mumbo-pattern-${pattern}`, $props.class]"
    :style="backgroundStyle"
  >
    <div class="mumbo-card is-content">
      <PolaroidStamp v-if="stamp" :src="stamp" :side="stampSide" />
      <div v-if="label" class="mumbo-label">{{ label }}</div>
      <h1 v-if="headline" class="mumbo-items-headline">{{ headline }}</h1>
      <div class="mumbo-items">
        <slot />
      </div>
      <div v-if="subtitle" class="mumbo-subtitle">{{ subtitle }}</div>
    </div>
  </div>
</template>
