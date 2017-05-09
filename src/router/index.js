import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'

Vue.use(Router)

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite')

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: '/msite'
        },
        {
          path: '/home',
          component: home
        },
        //所有商铺列表页
        {
          path: '/msite',
          component: msite,
        },
      ]
    }
  ]
})
