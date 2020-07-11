import Api from './config_axios'
import { token } from '../utils/token'

export default {
  createUser (data) {
    return Api.post('api/user/', data)
  },
  checkUser (data) {
    return Api.post('api/user/check-user', data)
  },
  loginUser(data) {
    return Api.post('api/login/', data)
  },
  userMe() {
    return Api.get('api/user/', {
      headers: {
        'access-token' : token()
      }
    })
  }
}