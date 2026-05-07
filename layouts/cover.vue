<script setup lang="ts">
import { computed } from 'vue'
import type { CoverProps, LayoutBaseProps, StampProps } from '../types'

const props = defineProps<LayoutBaseProps & StampProps & CoverProps & {
  width?: number | string
}>()

function asPct(value: typeof props.width): string | null {
  if (value == null) return null
  const n = typeof value === 'string' ? Number(value) : value
  return Number.isInteger(n) ? `${n}%` : null
}

const cardWidth = computed(() => asPct(props.width) ?? 'fit-content')
const cardMaxWidth = computed(() => asPct(props.width) ?? '70%')
</script>

<template>
  <Wrapper
    name="cover"
    :class="$props.class"
    :pattern="pattern"
    :background-color="backgroundColor"
  >
    <Cover
      :label="label"
      :headline="headline"
      :quote="quote"
      :subtitle="subtitle"
      :stamp="stamp"
      :stamp-side="stampSide"
      :tag="tag"
    >
      <slot />
    </Cover>
  </Wrapper>
</template>

<style>
.slidev-layout.cover .mumbo-card {
  width: v-bind(cardWidth);
  max-width: v-bind(cardMaxWidth);
}
</style>
