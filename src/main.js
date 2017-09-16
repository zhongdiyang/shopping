// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iview from 'iview'
import axios from 'axios'
import crypto from 'crypto'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'http://localhost:3000'
Vue.prototype.$http = axios
Vue.prototype.$crypto = crypto

import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(iview)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
