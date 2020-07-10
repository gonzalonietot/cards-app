import Api from './config_axios'

export default {
  createCard (data) {
    return Api.post('api/task/', data)
  },
  editCard(data) {
    return Api.put('api/task/', data)
  },
  getTask () {
    return Api.get('api/task/')
  },
}