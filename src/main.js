import 'es6-promise/auto'

import Vue from 'vue'
import App from './components/App'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store
})
