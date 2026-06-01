<script setup lang="ts">
import { computed } from 'vue'
import type { LayoutBaseProps, StampProps } from '../types'

const props = defineProps<LayoutBaseProps & StampProps & {
  url?: string
  image?: string
  width?: number | string
}>()

const stamps = computed(() => props.stamp ? (Array.isArray(props.stamp) ? props.stamp : [props.stamp]) : [])
</script>

<template>
  <Wrapper v-bind="$props" name="browser">
    <PolaroidStamp v-for="(s, i) in stamps" :key="i" v-bind="s" />
    <BrowserWindow :url="url" :image="image" :width="width" />
  </Wrapper>
</template>
