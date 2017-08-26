import Vue from 'vue'
import Resource from 'vue-resource'

Vue.use(Resource)

export default {
  getMenu (success, error) {
    Vue.http.get('http://192.168.1.200:8888/menu').then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  getItem (menuID, success, error) {
    console.log('http://192.168.1.200:8888/menu/' + menuID + '/')
    Vue.http.get('http://192.168.1.200:8888/menu/' + menuID + '/').then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  sendOrder (payload, success, error) {
    console.log(JSON.stringify(payload))
    Vue.http.post('http://api.nopadol.com:8080/NPDataCenterWs/center/login', payload).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      }
      )
  }
}
