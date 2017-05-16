<template>
  <div class="content">
    <div class="row" v-for="pair in pairedItems">
      <Tutorial class="tutorial" v-for="item in pair" :item="item" :key="item.url" />
    </div>
  </div>
</template>

<script>
import Tutorial from './Tutorial'
import pair from '../utilities/pair'

export default {
  name: 'tutorial-list',
  components: { Tutorial },
  props: ['tutorials'],
  computed: {
    pairedItems: function () {
      return pair(this.tutorials)
    }
  }
}
</script>

<style scoped>
  .content {
    margin: 20px 0;
  }
  .tutorial {
    margin: 10px 0;
  }
  @media (max-width: 768px) {
    .tutorial:nth-child(2n) {
      margin-top: 20px;
    }
  }
</style>
