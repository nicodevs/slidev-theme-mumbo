<script setup lang="ts">
import { computed } from 'vue'
import Cover from '../components/Cover.vue'
import type { CardItem, CoverConfig, CoverProps, LayoutBaseProps, StampProps } from '../types'

const props = defineProps<LayoutBaseProps & StampProps & CoverProps & {
  cover?: CoverConfig
  cards?: CardItem[]
  snippet?: string
  items?: string[]
}>()

const stamps = computed(() => props.stamp ? (Array.isArray(props.stamp) ? props.stamp : [props.stamp]) : [])
</script>

<template>
  <Wrapper v-bind="$props" name="default">
    <PolaroidStamp v-for="(s, i) in stamps" :key="i" v-bind="s" />
    <Cover v-if="cover" v-bind="cover">
      <slot />
    </Cover>
    <CodeWindow v-else-if="snippet !== undefined" :title="snippet">
      <slot />
    </CodeWindow>
    <CardsGrid v-else-if="cards">
      <Card v-for="(card, i) in cards" :key="i" v-bind="card" />
    </CardsGrid>
    <Cover
      v-else-if="items"
      variant="content"
      :label="label"
      :headline="headline"
      :subtitle="subtitle"
      :items="items"
    />
    <Cover v-else variant="content">
      <slot />
    </Cover>
  </Wrapper>
</template>
