<template>
  <div class="form-group text-center">
    <template v-for="option in options">
      <label class="radio-inline">
        <input type="radio" :value="option[0]" :name="name" v-model="selected">
        <strong>{{ option[1] }}</strong>
      </label>
    </template>
</div>
</template>

<script>
export default {
  name: 'radio-group',
  props: {
    value: {
      required: true,
      default: ''
    },
    options: {
      type: Array,
      required: true,
      default: []
    },
    name: {
      type: String,
      required: true
    }
  },
  data: function () {
    return { selected: this.value }
  },
  watch: {
    selected: function (val) {
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
