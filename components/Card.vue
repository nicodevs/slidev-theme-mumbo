<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { StampProps } from '../types'
import { blockMarkdown, isIconName } from '../utils/markdown'

const props = defineProps<StampProps & {
  color?: string
  label?: string | number
  icon?: string
  text?: string
  subtext?: string
}>()

const labelIsIcon = computed(() => isIconName(props.label))
const subtextHtml = computed(() => props.subtext ? blockMarkdown(props.subtext) : '')
const resolvedIcon = computed(() => props.icon || (labelIsIcon.value ? (props.label as string) : undefined))
const badgeLabel = computed(() => (labelIsIcon.value ? undefined : props.label))
const stamps = computed(() => props.stamp ? (Array.isArray(props.stamp) ? props.stamp : [props.stamp]) : [])
</script>

<template>
  <div
    class="mumbo-cards-item"
    :class="{ 'has-icon-label': !!resolvedIcon }"
    :style="color ? { '--mumbo-card-color': color } : undefined"
    :data-label="badgeLabel"
  >
    <PolaroidStamp v-for="(s, i) in stamps" :key="i" v-bind="s" />
    <Icon v-if="resolvedIcon" :icon="resolvedIcon" class="mumbo-cards-icon" />
    <slot>{{ text }}</slot>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-if="subtext" class="mumbo-cards-subtext" v-html="subtextHtml" />
  </div>
</template>
