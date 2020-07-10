import Api from './config_axios'

export default {
  createCard (data) {
    return Api.post('api/task/', data)
  },
}