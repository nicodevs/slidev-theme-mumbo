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
    class="slidev-layout code"
    :class="[`mumbo-pattern-${pattern}`, `mumbo-palette-${palette}`, $props.class]"
  >
    <PolaroidStamp v-if="stamp" :src="stamp" :side="stampSide" />
    <div class="mumbo-code-slot">
      <slot />
    </div>
  </div>
</template>
