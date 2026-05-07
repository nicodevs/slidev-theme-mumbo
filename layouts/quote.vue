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
  tag?: string
}>(), {
  pattern: 'grid',
})

const backgroundStyle = computed(() =>
  props.backgroundColor ? { '--mumbo-bg': props.backgroundColor } : undefined,
)
</script>

<template>
  <div
    class="slidev-layout quote"
    :class="[`mumbo-pattern-${pattern}`, $props.class]"
    :style="backgroundStyle"
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
