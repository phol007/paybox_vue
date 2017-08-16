import Vue from 'vue'
import Router from 'vue-router'
const Menu = () => import('@/components/menu')
const items = () => import('@/components/item')
const payment = () => import('@/components/payment')

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
    },
    {
      path: '/payment/items/langID/oldMenu',
      name: 'payment',
      component: payment
    }
  ]
})
