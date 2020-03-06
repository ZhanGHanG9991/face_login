// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import '../style/theme/index.css'
import {store} from './store'
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'http://116.62.15.89:5775'

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,
    ElementUI
  },
  template: '<App/>'
})
