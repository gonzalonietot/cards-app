import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Registration from '../pages/Registration'
import store from '../store/store'


const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      component: Home,
      path: '/',
      meta: {
        auth: true
      }
    },
    {
      name: 'Registration',
      component: Registration,
      path: '/registration'
    },
    {
      name: 'Login',
      component: Login,
      path: '/login',
    },
    {
      path: '*',
      component: Home,
    },

  ]
})
const openRoutes = ['Login', 'Registration']

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  store.commit('AuthUser', token)
  if (to.meta.auth) {
    if (from.name === 'Login') {
      next()
    } else if (store.getters.authenticated) {
      next()
    } else if (!store.getters.authenticated) {
      next('/login')
    } else {
      next('/')
    }
  } else if (store.getters.authenticated) {
    next('/')
  } else if (openRoutes.includes(to.name)) {
    next()
  } else {
    next('/login')
  }
})
export default router
