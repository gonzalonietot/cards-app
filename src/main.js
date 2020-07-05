import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuetify)

new Vue({
  mounted () {
    const accessAllowed = false
    if(!accessAllowed) {
      this.$router.push({name: 'Login'}).catch(() => {})
    }
  },
  render: h => h(App),
  router,
  vuetify,
}).$mount('#app')
