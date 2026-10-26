<script setup lang="ts">
import { computed } from 'vue'
import type { CardItem, CoverProps, LayoutBaseProps, StampProps, StickerItem } from '../types'
import { inlineMarkdown } from '../utils/markdown'

const props = defineProps<LayoutBaseProps & StampProps & CoverProps & {
  cards?: CardItem[]
  reveal?: boolean
  snippet?: string
  snippetSize?: string | number
  items?: string[]
  stickers?: StickerItem[]
}>()

const stamps = computed(() => props.stamp ? (Array.isArray(props.stamp) ? props.stamp : [props.stamp]) : [])
const isSingleCard = computed(() => Array.isArray(props.cards) && props.cards.length === 1)
const cardHostsStamp = computed(() => !props.snippet && !props.stickers && (!props.cards || isSingleCard.value))
const snippetHostsStamp = computed(() => props.snippet !== undefined)
const wrapperStamps = computed(() => (cardHostsStamp.value || snippetHostsStamp.value) ? [] : stamps.value)
</script>

<template>
  <Wrapper v-bind="$props" name="default">
    <PolaroidStamp v-for="(s, i) in wrapperStamps" :key="i" v-bind="s" />
    <div v-if="snippet !== undefined" class="mumbo-snippet-section">
      <h1 v-if="headline" class="mumbo-title mumbo-snippet-headline" v-html="inlineMarkdown(headline)" />
      <CodeWindow :title="snippet" :size="snippetSize" :stamp="stamp">
        <slot />
      </CodeWindow>
    </div>
    <CardsGrid v-else-if="cards" :headline="headline" :reveal="reveal" :tag="tag">
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
      :tag="tag"
      :quote="quote"
      :items="items"
      :stamp="stamp"
    />
    <Cover
      v-else-if="headline || quote"
      :width="width"
      :label="label"
      :headline="headline"
      :subtitle="subtitle"
      :tag="tag"
      :quote="quote"
      :stamp="stamp"
    >
      <slot />
    </Cover>
    <Cover v-else variant="content" :label="label" :subtitle="subtitle" :tag="tag" :stamp="stamp">
      <slot />
    </Cover>
  </Wrapper>
</template>
