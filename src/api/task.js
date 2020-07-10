import Api from './config_axios'

export default {
  createCard (data) {
    const token = localStorage.getItem('token')
    return Api.post('api/task/', data, {
      headers: {
        'access-token' : token
      }
    })
  },
  editCard(data) {
    const token = localStorage.getItem('token')
    return Api.put('api/task/', data , {
      headers: {
        'access-token' : token
      }
    })
  },
  getTask (userId) {
    const token = localStorage.getItem('token')
    return Api.get(`api/task/${userId}`, {
      headers: {
        'access-token' : token
      }
    })
  },
}