<script setup lang="ts">
import { computed } from 'vue'
import type { CoverProps, StampProps } from '../types'

defineOptions({ inheritAttrs: false })

const props = defineProps<CoverProps & StampProps & {
  variant?: 'cover' | 'content'
  width?: number | string
  items?: string[]
}>()

function asPct(value: typeof props.width): string | null {
  if (value == null) return null
  const n = typeof value === 'string' ? Number(value) : value
  return Number.isInteger(n) ? `${n}%` : null
}

const cardWidth = computed(() => asPct(props.width) ?? 'fit-content')
const cardMaxWidth = computed(() => asPct(props.width) ?? (props.items ? '80%' : '70%'))

const stamps = computed(() => props.stamp ? (Array.isArray(props.stamp) ? props.stamp : [props.stamp]) : [])
</script>

<template>
  <div
    class="mumbo-card"
    :class="{
      'is-content': variant === 'content',
      'is-items': items,
    }"
  >
    <PolaroidStamp v-for="(s, i) in stamps" :key="i" v-bind="s" />
    <div v-if="tag" class="mumbo-tape">{{ tag }}</div>
    <div v-if="label" class="mumbo-label">{{ label }}</div>
    <h1 v-if="quote" class="mumbo-title is-quote">{{ quote }}</h1>
    <h1 v-else-if="headline" class="mumbo-title">{{ headline }}</h1>
    <div v-if="items" class="mumbo-items">
      <ul>
        <li v-for="(item, i) in items" :key="i">
          <v-click>{{ item }}</v-click>
        </li>
      </ul>
    </div>
    <slot v-else />
    <div v-if="subtitle" class="mumbo-subtitle">{{ subtitle }}</div>
  </div>
</template>

<style>
.mumbo-card {
  width: v-bind(cardWidth);
  max-width: v-bind(cardMaxWidth);
}
</style>
