<script setup lang="ts">
withDefaults(defineProps<{
  class?: string
  pattern?: string
  palette?: string
  label?: string | number
  headline?: string
  subtitle?: string
  stamp?: string
  stampSide?: 'tl' | 'tr' | 'bl' | 'br'
  tag?: string
}>(), {
  pattern: 'grid',
  palette: 'sage',
})
</script>

<template>
  <div
    class="slidev-layout quote"
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
