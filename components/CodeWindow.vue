<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="mumbo-code-window">
    <div class="mumbo-code-window-bar">
      <span class="mumbo-code-window-dot is-close" />
      <span class="mumbo-code-window-dot is-min" />
      <span class="mumbo-code-window-dot is-max" />
      <span v-if="title" class="mumbo-code-window-title">{{ title }}</span>
    </div>
    <div class="mumbo-code-window-body">
      <slot />
    </div>
  </div>
</template>
