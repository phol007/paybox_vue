import Vue from 'vue'
import Resource from 'vue-resource'

Vue.use(Resource)

export default {
  getMenu (success, error) {
    Vue.http.get('http://localhost:8888/menu').then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  getItem (menuID, success, error) {
    console.log('http://localhost:8888/menu/' + menuID + '/')
    Vue.http.get('http://localhost:8888/menu/' + menuID + '/').then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  }
}
