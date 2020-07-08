import Vue from 'vue'
import Vuex from 'vuex'
import userApi from '../api/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: false,
    authError: null
  },
  getters: {
    authenticated: state => state.authenticated,
    authError: state => state.authError
  },
  actions: {
    signIn({ commit }, { email, password }) {
      return userApi.loginUser({email, password}).then((response) => {
        saveToken(response.data.token, commit)
      }).catch((response) => {
        commit('AuthError', response.data)
      })
    },
  },
  mutations: {
    AuthUser(state, value) {
      state.authenticated = !!value
      state.authError = null
    },
    AuthError(state, e) {
      state.authError = e
    }
  },
})

function saveToken(token, commit) {
  localStorage.setItem('token', token)
  commit('AuthUser', token)
}
