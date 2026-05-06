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
}>(), {
  pattern: 'gingham',
  palette: 'blue',
})
</script>

<template>
  <div
    class="slidev-layout statement"
    :class="[`mumbo-pattern-${pattern}`, `mumbo-palette-${palette}`, $props.class]"
  >
    <ChapterCard
      :label="label"
      :headline="headline"
      :subtitle="subtitle"
      :stamp="stamp"
      :stamp-side="stampSide"
    >
      <slot />
    </ChapterCard>
  </div>
</template>
