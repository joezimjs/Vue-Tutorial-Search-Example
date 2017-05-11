<template>
  <div class="container">

    <div class="header clearfix">
      <h3><img src="../assets/logo.png" width=25> Tutorial Finder</h3>
    </div>

    <div class="jumbotron">
      <p class="text-success">Use the search box and technology selector to find a tutorial you're looking for.</p>
      <div class="form-group input-group">
        <input type="search" class="form-control input-lg">
        <span class="input-group-btn">
          <button class="btn btn-primary btn-lg" type="button"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
        </span>
      </div>
      <p class="form-group text-center tech-options">
        <label class="radio-inline">
          <input type="radio" name="tech" checked>
          <strong>All</strong>
        </label><br>
        <label class="radio-inline">
          <input type="radio" name="tech">
          <strong>HTML</strong>
        </label>
        <label class="radio-inline">
          <input type="radio" name="tech">
          <strong>CSS</strong>
        </label>
        <label class="radio-inline">
          <input type="radio" name="tech">
          <strong>JavaScript</strong>
        </label>
        <label class="radio-inline">
          <input type="radio" name="tech">
          <strong>Angular</strong>
        </label>
        <label class="radio-inline">
          <input type="radio" name="tech">
          <strong>React</strong>
        </label>
        <label class="radio-inline">
          <input type="radio" name="tech">
          <strong>Vue</strong>
        </label>
      </p>
    </div>

    <div class="content">
      <template v-for="pair in pairedItems">
        <div class="row">
          <tutorial v-for="item in pair" :item="item" :key="item.url" />
        </div>
      </template>
    </div>

    <footer class="footer">
      <p>&copy; 2016 Company, Inc.</p>
    </footer>

  </div>
</template>

<script>
import store from '../store.js'
import Tutorial from './Tutorial'

export default {
  name: 'app',
  components: { Tutorial },
  computed: {
    pairedItems: function () {
      let pairs = [],
        pair = [],
        tutorials = this.$store.state.tutorials

      tutorials.sort(() => this.getRandomInt(-1,1))
      tutorials.forEach((val, index) => {
        if (index % 2 === 0) {
          pair = [val]
        } else {
          pair.push(val)
          pairs.push(pair)
        }

        if (index % 2 === 0 && index + 1 === tutorials.length) {
          pairs.push(pair)
        }
      })

      return pairs
    }
  },
  methods: {
    getRandomInt: function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max + 1);
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }
}
</script>

<style scoped>
  .container {
    max-width: 750px;
  }
  input[type=radio] {
    height: 21px;
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
