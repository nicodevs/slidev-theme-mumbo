<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  class?: string
  pattern?: string
  palette?: string
  label?: string | number
  headline?: string
  subtitle?: string
  stamp?: string
  stampSide?: 'tl' | 'tr' | 'bl' | 'br'
  tag?: string
  width?: number | string
}>(), {
  pattern: 'grid',
  palette: 'sage',
})

function asPct(value: typeof props.width): string | null {
  if (value == null) return null
  const n = typeof value === 'string' ? Number(value) : value
  return Number.isInteger(n) ? `${n}%` : null
}

const cardWidth = computed(() => asPct(props.width) ?? 'fit-content')
const cardMaxWidth = computed(() => asPct(props.width) ?? '70%')
</script>

<template>
  <div
    class="slidev-layout cover"
    :class="[`mumbo-pattern-${pattern}`, `mumbo-palette-${palette}`, $props.class]"
  >
    <ChapterCard
      :label="label"
      :headline="headline"
      :subtitle="subtitle"
      :stamp="stamp"
      :stamp-side="stampSide"
      :tag="tag"
    >
      <slot />
    </ChapterCard>
  </div>
</template>

<style>
.slidev-layout.cover .mumbo-card {
  width: v-bind(cardWidth);
  max-width: v-bind(cardMaxWidth);
}
</style>
