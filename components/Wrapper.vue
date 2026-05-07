<script setup lang="ts">
import { computed } from 'vue'
import type { LayoutBaseProps } from '../types'

const props = withDefaults(defineProps<LayoutBaseProps & { name: string }>(), {
  pattern: 'grid',
})

const backgroundStyle = computed(() =>
  props.backgroundColor ? { '--mumbo-bg': props.backgroundColor } : undefined,
)
</script>

<template>
  <div
    class="slidev-layout"
    :class="[name, `mumbo-pattern-${pattern}`, $props.class]"
    :style="backgroundStyle"
  >
    <slot />
  </div>
</template>
