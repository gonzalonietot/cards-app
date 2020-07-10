import Vue from 'vue'
import Vuex from 'vuex'
import userApi from '../api/user'
import taskApi from '../api/task'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: false,
    authError: null,
    task: []
  },
  getters: {
    authenticated: state => state.authenticated,
    authError: state => state.authError,
    task: state => state.task
  },
  actions: {
    signIn({ commit }, { email, password }) {
      return userApi.loginUser({email, password}).then((response) => {
        saveToken(response.data.token, commit)
      }).catch((response) => {
        commit('AuthError', response.data)
      })
    },
    signOff({commit}) {
      commit('AuthLogout')
    },
    get_all_task({commit}) {
      return taskApi.getTask().then ((response) => {
        if (response && response.data) {
          commit('SET_TASK', response.data)
        }
      })
    }

  },
  mutations: {
    AuthUser(state, value) {
      state.authenticated = !!value
      state.authError = null
    },
    AuthError(state, e) {
      state.authError = e
    },
    AuthLogout (state, value) {
      localStorage.removeItem('token')
      state.authenticated = !!value
      state.authError = null
    },
    SET_TASK(state, value) {
      state.task = value
    }

  },
})

function saveToken(token, commit) {
  localStorage.setItem('token', token)
  commit('AuthUser', token)
}
