---
theme: ./
layout: cover
label: MadVue 2026
headline: VUE REAL-TIME APPS
subtitle: A talk by Nico Devs
pattern: grid
palette: sage
stamp: https://vuejs.org/images/logo.png
stampSide: tr
---

---
layout: intro
label: Intro
headline: Hi, I'm Nico
subtitle: Brief speaker intro
pattern: dots
palette: kraft
stamp: https://vuejs.org/images/logo.png
stampSide: tr
---

---
layout: section
label: Section
headline: Time to Start Building
subtitle: Layouts & patterns
pattern: stripes
palette: forest
stamp: https://vuejs.org/images/logo.png
stampSide: tl
---

---
layout: statement
label: Statement
headline: Kinda Hard to Do With a Wet Keyboard
subtitle: But we ship anyway
pattern: gingham
palette: blue
stamp: https://vuejs.org/images/logo.png
stampSide: br
---

---
layout: fact
label: Fact
headline: 42%
subtitle: of slides are made on a deadline
pattern: grid
palette: red
stamp: https://vuejs.org/images/logo.png
stampSide: bl
---

---
layout: quote
label: Quote
headline: Good Design Is As Little Design As Possible
subtitle: — Dieter Rams
pattern: diagonal
palette: kraft
stamp: https://vuejs.org/images/logo.png
stampSide: tr
---

---
layout: items
label: Items
headline: What's in the Box
pattern: dots
palette: forest
stamp: https://vuejs.org/images/logo.png
stampSide: tr
---

- Cream chapter cards
- Six craft-paper palettes
- Seven repeating patterns
- Optional polaroid stamp
- Monokai code blocks
- Auto-publish to npm

---
layout: code
pattern: grid
palette: blue
---

<CodeWindow title="chat.vue">

````md magic-move
```vue
<script setup>
const input = ref('')
</script>
```

```vue
<script setup>
const input = ref('')
const messages = ref([])
</script>
```

```vue
<script setup>
const input = ref('')
const messages = ref([])

const { data, send } = useWebSocket('ws://localhost:3000/_ws')
</script>
```

```vue
<script setup>
const input = ref('')
const messages = ref([])

const { data, send } = useWebSocket('ws://localhost:3000/_ws')
watch(data, (msg) => messages.value.push(msg))
</script>
```

```vue
<script setup>
const input = ref('')
const messages = ref([])

const { data, send } = useWebSocket('ws://localhost:3000/_ws')
watch(data, (msg) => messages.value.push(msg))

function submit() {
  send(input.value)
  messages.value.push(`Me: ${input.value}`)
  input.value = ''
}
</script>

<template>
  <input v-model="input" @keyup.enter="submit" />
  <div v-for="(msg, i) in messages" :key="i">{{ msg }}</div>
</template>
```
````

</CodeWindow>

---
layout: end
label: End
headline: Pearlescent Pinky Bashing
subtitle: That's a wrap
pattern: stripes
palette: pink
stamp: https://vuejs.org/images/logo.png
stampSide: bl
---

---
layout: default
pattern: dots
palette: sage
---

# Default

Regular content slides ride on the same patterned background, with a cream card holding the content.

- First point with some context
- Second point with **bold emphasis**
- Third point with `inline code`

```ts
const theme = 'mumbo'
console.log(`Using ${theme}`)
```
