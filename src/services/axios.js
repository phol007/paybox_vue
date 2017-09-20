import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
axios.defaults.headers.post['Content-Type'] = 'application/json'

const URL = 'http://localhost'
// const URL = 'http://192.168.0.161'

export default {
  getMenuAX (success, error) {
    Vue.axios.get(URL + ':8888/menu').then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  getItemAX (menuID, success, error) {
    Vue.axios.get(URL + ':8888/menu/' + menuID + '/').then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  sendOrderAX (payload, success, error) {
    console.log(JSON.stringify(payload))
    // var headers = { 'Content-Type': 'application/json', 'Authorization': 'JWT fefege...' }
    var url = URL + ':8888/sale'
    // var url = 'http://api.nopadol.com:8080/NPDataCenterWs/center/login'
    Vue.axios.post(url, JSON.stringify(payload)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      }
    )
  },
  getMoneyOnMachine (success, error) {
    Vue.axios.get(URL + ':8888/cash').then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      }
    )
  }
}
