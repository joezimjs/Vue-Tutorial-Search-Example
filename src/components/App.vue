<template>
  <div class="container">

    <div class="header clearfix">
      <h2><img src="../assets/logo.png" width=35> Tutorial Finder</h2>
    </div>

    <Filters />

    <div class="content">
      <div class="row" v-for="pair in pairedItems">
        <Tutorial v-for="item in pair" :item="item" :key="item.url" />
      </div>
    </div>

    <footer class="footer">
      <p>&copy; 2016 Company, Inc.</p>
    </footer>

  </div>
</template>

<script>
import Tutorial from './Tutorial'
import Filters from './Filters'
import pair from '../utilities/pair'

export default {
  name: 'app',
  components: { Tutorial, Filters },
  computed: {
    pairedItems: function () {
      return pair(this.$store.state.tutorials)
    }
  }
}
</script>

<style scoped>
  .container {
    max-width: 750px;
  }
  .footer {
    padding: 15px;
    color: #777;
    border-top: 1px solid #e5e5e5;
  }
  .content {
    margin: 20px 0;
  }
  .header {
    margin: 10px 0 20px;
  }
  .row {
    margin: 20px 0;
  }
</style>
