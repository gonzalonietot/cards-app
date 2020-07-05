import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Registration from '../pages/Registration'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      component: Home,
      path: '/'
    },
    {
      name: 'Registration',
      component: Registration,
      path: '/registration'
    },
    {
      name: 'Login',
      component: Login,
      path: '/login'
    },
    {
      path: '*',
      component: Home,
    },

  ]
})
export default router