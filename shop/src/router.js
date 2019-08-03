import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import mine from './views/mine.vue'
import classfy from './views/classfy.vue'
import shoppingcar from './views/shoppingcar.vue'
import ajax from './views/ajax.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mine',
      name: 'mine',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: mine
    },{
      path:'/classfy',
      name:'classfy',
      component:classfy
    },{
      path:'/shoppingcar',
      name:'shoppingcar',
      component:shoppingcar
    },{
      path:'/ajax',
      name:'ajax',
      component:ajax
    }
  ]
})
