import Api from './config_axios'

export default {
  createUser (data) {
    return Api.post('api/user/', data)
  }
}