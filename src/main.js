// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bulma/css/bulma.css'
import './css/index.css'
import './css/payment.css'
import 'font-awesome/css/font-awesome.css'
import VueNativeSock from 'vue-native-websocket'
import Touch from 'vue-touchjs'

Vue.config.productionTip = false
Vue.use(VueNativeSock, 'ws://192.168.0.97:8888/web', { format: 'json' })
Vue.use(Touch)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
