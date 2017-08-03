<template>
  <div class="container">

    <div class="header clearfix">
      <h2><img src="../assets/logo.png" width=35> Tutorial Finder</h2>
    </div>

    <div class="jumbotron">
      <p>Use the search box and technology selector to find a tutorial you're looking for.</p>
      <SearchBox v-model="searchTerm" />
      <RadioGroup v-model="tech" />
    </div>

    <LoadingOverlay class="well" :isLoading="formIsLoading">
      <h3>Add A Tutorial</h3>
      <TutorialForm @submit="addTutorial" :tutorial="tutorial" />
    </LoadingOverlay>

    <LoadingOverlay :isLoading="listIsLoading">
      <Pagination v-model="page" :items="tutorials.length" :perPage="10" />
      <TutorialList :tutorials="pageOfTutorials" />
      <Pagination v-model="page" :items="tutorials.length" :perPage="10" />
    </LoadingOverlay>

    <footer class="footer">
      <p>Built using <a href="https://vuejs.org/">Vue.js</a>.</p>
    </footer>

  </div>
</template>

<script>
import TutorialList from './TutorialList'
import TutorialForm from './TutorialForm'
import Pagination from './Pagination'
import SearchBox from './SearchBox'
import RadioGroup from './RadioGroup'
import LoadingOverlay from './LoadingOverlay'
import getArraySection from '../utilities/get-array-section'
import {mapGetters} from 'vuex'

export default {
  name: 'app',
  components: { TutorialList, TutorialForm, Pagination, SearchBox, RadioGroup, LoadingOverlay },
  data: () => ({
    searchTerm: '',
    tech: '',
    page: 1,
    tutorial: {},
    listIsLoading: false,
    formIsLoading: false
  }),
  computed: {
    pageOfTutorials() {
      return getArraySection(this.tutorials, this.page, 10)
    },
    tutorials() {
      return this.$store.getters['tutorials/filtered']( {
        searchTerm: this.searchTerm.toLowerCase(),
        tech: this.tech
      })
    },
    ...mapGetters({
      isLoaded: 'tutorials/isLoaded'
    })
  },
  watch: {
    tutorials() {
      this.page = 1
    }
  },
  methods: {
    addTutorial(tutorial) {
      window.tut = tutorial
      this.setIsLoading('form', this.$store.dispatch('tutorials/addTutorial', tutorial).then(() => this.tutorial = {}))
    },
    setIsLoading(sectionName, promise) {
      this[sectionName + 'IsLoading'] = true
      promise
        .then(() => this[sectionName + 'IsLoading'] = false)
        .catch(() => this[sectionName + 'IsLoading'] = false)
    }
  },
  created() {
    this.setIsLoading('list', this.$store.dispatch('tutorials/load'))
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
