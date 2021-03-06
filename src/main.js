import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'
import moment from 'moment'
import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import AsyncComputed from 'vue-async-computed'

// var $cookies = {
//   get: function () {
//     console.log('ddddd')
//   }
// }
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueCookies)
Vue.use(AsyncComputed)
Vue.use(
  VueCodemirror /* {
  options: { theme: 'base16-dark', ... },
  events: ['scroll', ...]
} */
)

Vue.prototype.axios = axios
Vue.prototype.$moment = moment

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.directive('focus', {
  inserted: function(el) {
    el.focus()
  }
})
// const http = axios.create({
//   baseURL: 'https://api.daocloud.io'
// })

// axios.defaults.baseURL = http

/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  // let user = JSON.parse(sessionStorage.getItem('user')) // 获取保存的信息
  let user = Vue.prototype.$cookies.get('token')

  if (!user && to.path !== '/login') {
    // 若user为空并且将要进入的路由不是login，则进入到login路径
    next({ path: '/login' })
  } else if (to.matched.length === 0) {
    next({ path: '/BuildFlowsList' })
  } else {
    // 如果user不为空 要进入到别的路由或者进入的路由是login 则进入下一个路由
    next()
  }
})
// this.$cookies.set()
axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    config.headers.Authorization = Vue.prototype.$cookies.get('token')
    return config
  },
  function(error) {
    // Do something with request error
    // return Promise.reject(error)
    console.log(error)
    router.push({ path: '/login' })
  }
)

// router.afterEach(transition => {
// NProgress.done();
// });
// axios.defaults.baseURL = CONFIG.baseURL;
// axios.interceptors.response.use(null, (error) => {
//   if (error.response.status === 401) {
//     login.logout()
//   }
//   if (error.response.status === 403) {
//     router.push('/input-license')
//   }
//   return Promise.reject(error)
// })
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  components: { App }
  // render: h => h(App)
})
