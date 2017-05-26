<template>
  <div class="form-group text-center">
    <template v-for="option in options">
      <label class="radio-inline">
        <input type="radio" :value="option" :name="name" v-model="selected">
        <span class="label label-default" v-if="option === ''">All</span>
        <TechLabel v-else :tech="option" />
      </label>
    </template>
</div>
</template>

<script>
import TechLabel from './TechLabel'
import { technologies } from '../data'

export default {
  name: 'radio-group',
  components: { TechLabel },
  props: {
    value: {
      default: ''
    },
    options: {
      type: Array,
      default: () => ['', ...Object.keys(technologies)]
    },
    name: {
      type: String,
      default: 'tech-filter'
    }
  },
  data: function() {
    return { selected: this.value }
  },
  watch: {
    selected: function(val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style scoped>
.radio-inline {
  padding-right: 10px;
}
</style>
