<script setup lang="ts">
import type { CoverProps, LayoutBaseProps, StampProps } from '../types'

defineProps<LayoutBaseProps & StampProps & CoverProps>()
</script>

<template>
  <Wrapper
    name="items"
    :class="$props.class"
    :pattern="pattern || 'dots'"
    :background-color="backgroundColor"
  >
    <div class="mumbo-card is-content">
      <PolaroidStamp v-if="stamp" :src="stamp" :side="stampSide" />
      <div v-if="label" class="mumbo-label">{{ label }}</div>
      <h1 v-if="headline" class="mumbo-items-headline">{{ headline }}</h1>
      <div class="mumbo-items">
        <slot />
      </div>
      <div v-if="subtitle" class="mumbo-subtitle">{{ subtitle }}</div>
    </div>
  </Wrapper>
</template>
