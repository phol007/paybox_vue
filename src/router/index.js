import Vue from 'vue'
import Router from 'vue-router'
const Menu = () => import('@/components/menu')
const items = () => import('@/components/item')
const payment = () => import('@/components/payment')
const setting = () => import('@/components/setting')
const addMoney = () => import('@/components/add_money')

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
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    },
    {
      path: '/addMoney',
      name: 'addMoney',
      component: addMoney
    }
  ]
})
