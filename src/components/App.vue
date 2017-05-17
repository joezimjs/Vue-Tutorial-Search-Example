<template>
  <div class="container">

    <div class="header clearfix">
      <h2><img src="../assets/logo.png" width=35> Tutorial Finder</h2>
    </div>

    <div class="jumbotron">
      <p>Use the search box and technology selector to find a tutorial you're looking for.</p>
      <SearchBox name="tech" v-model="searchTerm" />
      <RadioGroup name="tech" v-model="tech" :options="techs" />
    </div>

    <Pagination v-model="page" :records="tutorials.length" :perPage="perPage" />
    <TutorialList :tutorials="pageOfTutorials" />
    <Pagination v-model="page" :records="tutorials.length" :perPage="perPage" />

    <footer class="footer">
      <p>Copyright &copy; 2017 <a href="https://www.joezimjs.com">Joseph Zimmerman</a></p>
    </footer>

  </div>
</template>

<script>
import TutorialList from './TutorialList'
import ResultCounter from './ResultCounter'
import Pagination from './Pagination'
import RadioGroup from './RadioGroup'
import SearchBox from './SearchBox'
import getArraySection from '../utilities/get-array-section'
import {tutorials as tutorialData, technologies } from '../data'

export default {
  name: 'app',
  components: { TutorialList, ResultCounter, Pagination, RadioGroup, SearchBox },
  data: () => ({
    searchTerm: '',
    tech: '',
    tutorials: [],
    page: 1,
    perPage: 10,
    techs: [
      ['', 'All'], ...Object.entries(technologies)
    ]
  }),
  computed: {
    pageOfTutorials: function () {
      return getArraySection(this.tutorials, this.page, this.perPage)
    }
  },
  watch: {
    searchTerm: function () { this.filterTutorials() },
    tech: function () { this.filterTutorials() }
  },
  methods: {
    filterTutorials: function () {
      const searchTerm = this.searchTerm
      const tech = this.tech
      let result = tutorialData

      if (searchTerm) {
        result = result.filter(tutorial => {
          return tutorial.title.toLowerCase().search(searchTerm.toLowerCase()) >= 0 ||
            tutorial.description.toLowerCase().search(searchTerm.toLowerCase()) >= 0
        })
      }

      if (tech) {
        result = result.filter(tutorial => tutorial.tech.indexOf(tech) >= 0)
      }

      this.tutorials = result
      this.page = 1
    }
  },
  created: function () {
    this.filterTutorials()
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
  .header {
    margin: 10px 0 20px;
  }
</style>
