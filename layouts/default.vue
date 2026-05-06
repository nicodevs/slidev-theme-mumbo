<script setup lang="ts">
withDefaults(defineProps<{
  class?: string
  pattern?: string
  palette?: string
  stamp?: string
  stampSide?: 'tl' | 'tr' | 'bl' | 'br'
}>(), {
  pattern: 'grid',
  palette: 'sage',
})
</script>

<template>
  <div
    class="slidev-layout default"
    :class="[`mumbo-pattern-${pattern}`, `mumbo-palette-${palette}`, $props.class]"
  >
    <div class="mumbo-card is-content">
      <PolaroidStamp v-if="stamp" :src="stamp" :side="stampSide" />
      <slot />
    </div>
  </div>
</template>
