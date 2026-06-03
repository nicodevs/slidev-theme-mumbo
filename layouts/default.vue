<script setup lang="ts">
import { computed } from 'vue'
import Cover from '../components/Cover.vue'
import type { CardItem, CoverConfig, CoverProps, LayoutBaseProps, StampProps, StickerItem } from '../types'

const props = defineProps<LayoutBaseProps & StampProps & CoverProps & {
  cover?: CoverConfig
  cards?: CardItem[]
  reveal?: boolean
  snippet?: string
  snippetSize?: string | number
  items?: string[]
  stickers?: StickerItem[]
}>()

const stamps = computed(() => props.stamp ? (Array.isArray(props.stamp) ? props.stamp : [props.stamp]) : [])
const isSingleCard = computed(() => Array.isArray(props.cards) && props.cards.length === 1)
const cardHostsStamp = computed(() => (!props.cover && !props.snippet && !props.cards && !props.stickers) || isSingleCard.value)
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
    <CardsGrid v-else-if="cards" :headline="headline" :reveal="reveal">
      <template v-for="(card, i) in cards" :key="i">
        <Card
          v-if="reveal && i > 0"
          v-bind="card"
          :stamp="isSingleCard ? stamp : undefined"
          v-click.up
        />
        <Card
          v-else
          v-bind="card"
          :stamp="isSingleCard ? stamp : undefined"
        />
      </template>
    </CardsGrid>
    <StickersWall v-else-if="stickers" :items="stickers" :headline="headline" />
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
