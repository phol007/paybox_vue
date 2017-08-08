import Vue from 'vue'
import Router from 'vue-router'
const Menu = () => import('@/components/menu')
const items = () => import('@/components/item')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/items/menu/langID',
      name: 'items',
      component: items
    }
  ]
})
