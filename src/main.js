// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import index from './Index'
import store from './store'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'
import 'normalize.css'

import './assets/scss/common.scss'

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<index/>',
  components: { index }
})
