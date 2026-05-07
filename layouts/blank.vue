<script setup lang="ts">
import type { LayoutBaseProps, StampProps } from '../types'

defineProps<LayoutBaseProps & StampProps>()
</script>

<template>
  <Wrapper
    name="blank"
    :class="$props.class"
    :pattern="pattern"
    :background-color="backgroundColor"
  >
    <PolaroidStamp v-if="stamp" :src="stamp" :side="stampSide" />
    <slot />
  </Wrapper>
</template>
