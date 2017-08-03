import Kinto from 'kinto'

let db = new Kinto({
  remote: 'https://tut-search.herokuapp.com/v1/',
  bucket: 'tut-search'
})
let tutorialAPI = db.collection('tutorials')

if (process.env.NODE_ENV === 'development') {
  window.tutorialAPI = tutorialAPI
  console.debug('Tutorial API available at `tutorialAPI`')
}

export default {
  namespaced: true,
  state: {
    data: []
  },
  getters: {
    // Docs:
    // Getters - https://vuex.vuejs.org/en/getters.html
    // Namespaced - https://vuex.vuejs.org/en/modules.html#accessing-global-assets-in-namespaced-modules
    tutorials(state) {
      return state.data
    },
    filtered(state) {
      return function({ searchTerm, tech }) {
        let result = state.data

        if (searchTerm) {
          result = result.filter(
            (tutorial) =>
              tutorial.title.toLowerCase().search(searchTerm) >= 0 ||
              tutorial.description.toLowerCase().search(searchTerm) >= 0
          )
        }

        if (tech) {
          result = result.filter((tutorial) => tutorial.tech.indexOf(tech) >= 0)
        }

        return result
      }
    }
  },
  mutations: {
    setTutorials(state, payload) {
      state.data = payload
    }
  },
  actions: {
    load({ dispatch }) {
      return dispatch('sync')
    },
    addTutorial({ dispatch }, tutorial) {
      return tutorialAPI.create(tutorial).then(() => dispatch('sync'))
    },
    sync({ commit }) {
      return tutorialAPI
        .sync()
        .then(() => tutorialAPI.list())
        .then((response) => {
          commit('setTutorials', response.data)
        })
        .catch(console.error)
    },
    delete({ dispatch }, id) {
      return tutorialAPI.delete(id).then(() => dispatch('sync'))
    }
  }
}
