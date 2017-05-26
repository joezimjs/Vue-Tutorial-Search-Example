<template>
  <span class="label" :style="{ backgroundColor: color }">{{ text }}</span>
</template>
<script>
import { technologies } from '../data'

export default {
  name: 'tech-label',
  props: {
    tech: {
      type: String,
      require: true
    }
  },
  computed: {
    text: function() {
      return technologies[this.tech].label
    },
    color: function() {
      return technologies[this.tech].color
    }
  }
}
</script>