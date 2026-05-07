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
    class="slidev-layout code"
    :class="[`mumbo-pattern-${pattern}`, $props.class]"
    :style="backgroundStyle"
  >
    <PolaroidStamp v-if="stamp" :src="stamp" :side="stampSide" />
    <div class="mumbo-code-slot">
      <slot />
    </div>
  </div>
</template>
