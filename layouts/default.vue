<script setup lang="ts">
import { computed } from 'vue'
import Cover from '../components/Cover.vue'
import type { CardItem, CoverConfig, CoverProps, LayoutBaseProps, StampProps, StickerItem } from '../types'

const props = defineProps<LayoutBaseProps & StampProps & CoverProps & {
  cover?: CoverConfig
  cards?: CardItem[]
  snippet?: string
  snippetSize?: string | number
  items?: string[]
  stickers?: StickerItem[]
}>()

const stamps = computed(() => props.stamp ? (Array.isArray(props.stamp) ? props.stamp : [props.stamp]) : [])
const cardHostsStamp = computed(() => !props.cover && !props.snippet && !props.cards && !props.stickers)
const wrapperStamps = computed(() => cardHostsStamp.value ? [] : stamps.value)
</script>

<template>
  <Wrapper v-bind="$props" name="default">
    <PolaroidStamp v-for="(s, i) in wrapperStamps" :key="i" v-bind="s" />
    <Cover v-if="cover" v-bind="cover">
      <slot />
    </Cover>
    <CodeWindow v-else-if="snippet !== undefined" :title="snippet" :size="snippetSize">
      <slot />
    </CodeWindow>
    <CardsGrid v-else-if="cards">
      <Card v-for="(card, i) in cards" :key="i" v-bind="card" />
    </CardsGrid>
    <StickersWall v-else-if="stickers" :items="stickers" />
    <Cover
      v-else-if="items"
      variant="content"
      :label="label"
      :headline="headline"
      :subtitle="subtitle"
      :items="items"
      :stamp="stamp"
    />
    <Cover v-else variant="content" :stamp="stamp">
      <slot />
    </Cover>
  </Wrapper>
</template>
