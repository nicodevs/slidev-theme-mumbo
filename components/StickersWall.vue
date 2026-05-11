<script setup lang="ts">
import type { StickerItem } from '../types'

const props = defineProps<{
  items: StickerItem[]
}>()

function stickerStyle(item: StickerItem, i: number) {
  const value = item.rotation == null
    ? '0deg'
    : typeof item.rotation === 'number' ? `${item.rotation}deg` : item.rotation
  return {
    '--mumbo-rotate': value,
    animationDelay: `${0.08 + i * 0.06}s`,
  }
}
</script>

<template>
  <div class="mumbo-stickers-wall">
    <span
      v-for="(item, i) in props.items"
      :key="i"
      class="mumbo-sticker"
      :style="stickerStyle(item, i)"
    >{{ item.text }}</span>
  </div>
</template>
