import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

import { Icon,Tabbar,TabbarItem,NavBar  } from 'vant';
Vue.use(Icon).use(Tabbar).use(TabbarItem).use(NavBar)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
