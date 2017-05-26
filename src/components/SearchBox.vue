<template>
  <div class="form-group has-feedback">
    <input type="search" class="form-control input-lg" v-model="searchTerm"
      placeholder="Search the title/description" :name="name">
    <span class="glyphicon glyphicon-search form-control-feedback" aria-hidden="true"></span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: ''
    },
    name: {
      default: ''
    }
  },
  data: function() {
    return { searchTerm: this.value }
  },
  watch: {
    value: function(val) {
      this.searchTerm = val
    },
    searchTerm: function(val) {
      this.$emit('input', val)
    }
  }
}
</script>