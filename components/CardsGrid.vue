<script setup lang="ts">
import { inlineMarkdown } from '../utils/markdown'
defineProps<{
  headline?: string
  reveal?: boolean
}>()
</script>

<template>
  <div class="mumbo-cards-section" :class="{ 'is-reveal': reveal }">
    <h1 v-if="headline" class="mumbo-title mumbo-cards-headline" v-html="inlineMarkdown(headline)" />
    <div class="mumbo-cards-grid">
      <slot />
    </div>
  </div>
</template>
