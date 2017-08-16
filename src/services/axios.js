import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  getMenuAX (success, error) {
    Vue.axios.get('http://localhost:8888/menu').then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  getItemAX (menuID, success, error) {
    Vue.axios.get('http://localhost:8888/menu/' + menuID + '/').then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  }
}
