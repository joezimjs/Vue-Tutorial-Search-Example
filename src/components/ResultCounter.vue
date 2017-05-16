<template>
  <div class="content">
    <strong>Found {{ itemCount }} result<span v-if="itemCount !== 1">s</span></strong>
  </div>
</template>

<script>

export default {
  name: 'result-counter',
  props: ['list'],
  computed: {
    itemCount: function () {
      return this.list.length || 0
    }
  }
}
</script>

<style scoped>
  .content {
    margin: 20px 0;
  }
</style>
