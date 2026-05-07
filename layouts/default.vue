<script setup lang="ts">
import Cover from '../components/Cover.vue'
import type { CardItem, CoverConfig, CoverProps, LayoutBaseProps, StampProps } from '../types'

defineProps<LayoutBaseProps & StampProps & CoverProps & {
  cover?: CoverConfig
  cards?: CardItem[]
  snippet?: string
  items?: string[]
}>()
</script>

<template>
  <Wrapper v-bind="$props" name="default">
    <PolaroidStamp v-if="stamp" v-bind="stamp" />
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
