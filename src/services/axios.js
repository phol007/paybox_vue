import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
axios.defaults.headers.post['Content-Type'] = 'application/json'

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
  },
  sendOrderAX (payload, success, error) {
    console.log(JSON.stringify(payload))
    // var headers = { 'Content-Type': 'application/json', 'Authorization': 'JWT fefege...' }
    var url = 'http://localhost:8888/sale'
    // var url = 'http://api.nopadol.com:8080/NPDataCenterWs/center/login'
    Vue.axios.post(url, payload).then(
      (response) => {
        success(response)
      },
      (response) => {
        error(response)
      }
    )
  }
}
