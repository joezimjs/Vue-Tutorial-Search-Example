import Vue from 'vue'
import Vuex from 'vuex'

import tutorials from './stores/tutorials.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: { tutorials }
})
