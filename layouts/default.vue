<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  class?: string
  pattern?: string
  backgroundColor?: string
  stamp?: string
  stampSide?: 'tl' | 'tr' | 'bl' | 'br'
}>(), {
  pattern: 'grid',
})

const backgroundStyle = computed(() =>
  props.backgroundColor ? { '--mumbo-bg': props.backgroundColor } : undefined,
)
</script>

<template>
  <div
    class="slidev-layout default"
    :class="[`mumbo-pattern-${pattern}`, $props.class]"
    :style="backgroundStyle"
  >
    <div class="mumbo-card is-content">
      <PolaroidStamp v-if="stamp" :src="stamp" :side="stampSide" />
      <slot />
    </div>
  </div>
</template>
