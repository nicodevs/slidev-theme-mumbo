<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  color?: string
  label?: string | number
  text?: string
}>()

const isIcon = computed(() => typeof props.label === 'string' && props.label.includes(':'))
</script>

<template>
  <div
    class="mumbo-cards-item"
    :class="{ 'has-icon-label': isIcon }"
    :style="color ? { '--mumbo-card-color': color } : undefined"
    :data-label="isIcon ? undefined : label"
  >
    <Icon v-if="isIcon" :icon="label as string" class="mumbo-cards-icon" />
    <slot>{{ text }}</slot>
  </div>
</template>
