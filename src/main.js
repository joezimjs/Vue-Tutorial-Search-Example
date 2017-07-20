import Vue from 'vue'
import App from './components/App'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

let app = new Vue({
  el: '#app',
  render: (h) => h(App),
  store
})
