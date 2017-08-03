<template>
  <LoadingOverlay class="tutorial-list-item" :isLoading="isLoading">
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
    <div class="actions-overlay">
      <button class="btn btn-danger btn-xs" @click="deleteTutorial"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span> Delete</button>
    </div>
  </LoadingOverlay>
</template>

<script>
import TechLabel from './TechLabel'
import LoadingOverlay from './LoadingOverlay'

let parser = document.createElement('a')

export default {
  name: 'tutorial',
  props: ['item'],
  data() {
    return { isLoading: false }
  },
  components: { TechLabel, LoadingOverlay },
  methods: {
    domainOf: url => ((parser.href = url), parser.hostname.replace(/^www\./, '')),
    deleteTutorial() {
      this.isLoading = true
      this.$store.dispatch('tutorials/delete', this.item.id).then(() => this.isLoading = false)
    }
  }
}
</script>

<style scoped>
  .tutorial-list-item {
    position: relative;
  }

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

  .actions-overlay {
    border-top: 1px solid #aaa;
    padding-top: 10px;
    transform: scaleY(0);
    transform-origin: top left;
    transition: transform .2s ease-out;
  }

  .tutorial-list-item:hover .actions-overlay {
    transform: scaleY(1);
  }
</style>
