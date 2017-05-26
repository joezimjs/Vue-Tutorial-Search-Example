<template>
  <div>
    <h4><a :href="item.url">{{ item.title }}</a></h4>
    <p class="meta">
      Published
      <span class="meta-bit">{{ item.datePublished }}</span>
      at
      <span class="meta-bit">{{ domainOf(item.url) }}</span>
    </p>
    <p>{{ item.description }}</p>
    <p>
      <TechLabel class="tech-label" v-for="tech in item.tech" :tech="tech" :key="tech" />
    </p>
  </div>
</template>

<script>
import TechLabel from './TechLabel'

let parser = document.createElement('a')

export default {
  name: 'tutorial',
  props: ['item'],
  components: { TechLabel },
  methods: {
    domainOf: url => ((parser.href = url), parser.hostname.replace(/^www\./, ''))
  }
}
</script>

<style scoped>
  .meta {
    color: #777;
    font-size: .85em;
  }

  .meta-bit {
    color: #333;
    font-weight: bold;
  }

  .tech-label + .tech-label {
    margin-left: 10px;
  }
</style>
