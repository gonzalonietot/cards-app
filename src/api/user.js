import Api from './config_axios'

export default {
  createUser (data) {
    return Api.post('api/user/', data)
  },
  checkUser (data) {
    return Api.post('api/user/check-user', data)
  },
  loginUser(data) {
    return Api.post('api/login/', data)
  }
}