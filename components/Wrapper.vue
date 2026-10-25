<script setup lang="ts">
import { computed } from 'vue'
import type { LayoutBaseProps } from '../types'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<LayoutBaseProps & { name: string }>(), {
  pattern: 'grid',
})

const cssVars = computed(() => {
  const style: Record<string, string> = {}
  if (props.backgroundColor) style['--mumbo-bg'] = props.backgroundColor
  if (props.accentColor) style['--mumbo-accent'] = props.accentColor
  if (typeof props.headlineStroke === 'string') style['--mumbo-headline-stroke'] = props.headlineStroke
  if (props.markerColor) style['--mumbo-marker-bg'] = props.markerColor
  return Object.keys(style).length ? style : undefined
})
</script>

<template>
  <div
    class="slidev-layout"
    :class="[name, `mumbo-pattern-${pattern}`, { 'has-headline-stroke': headlineStroke }, props.class]"
    :style="cssVars"
  >
    <slot />
  </div>
</template>
