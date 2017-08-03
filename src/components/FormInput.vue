<template>
  <div class="form-group">
    <label :for="name"><slot></slot></label>
    <input :type="type" :name="name" class="form-control" :value="inputValue" @change="updateValue" @input="updateValue" :placeholder="placeholder" :required="required">
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    value: {}
  },
  data () {
    return {
      inputValue: this.value
    }
  },
  watch: {
    value(value) {
      this.inputValue = value
    },
    inputValue(value) {
      this.$emit('change', value)
      this.$emit('input', value)
    }
  },
  methods: {
    updateValue(e) {
      this.inputValue = e.target.value
    }
  }
}
</script>
