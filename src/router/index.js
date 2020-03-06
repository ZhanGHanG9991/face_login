import Vue from 'vue'
import Router from 'vue-router'
import EndLogin from '../components/login_module/EndLogin'
import Main from '../components/Main'
import Register from '../components/register_module/Register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EndLogin',
      component: EndLogin
    }, {
      path: '/main',
      name: 'Main',
      component: Main
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ],
  mode: 'history'
})
