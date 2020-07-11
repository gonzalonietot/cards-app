import Api from './config_axios'
import { token } from '../utils/token'

export default {
  createCard (data) {
    return Api.post('api/task/', data, {
      headers: {
        'access-token' : token()
      }
    })
  },
  editCard(data) {
    return Api.put('api/task/', data , {
      headers: {
        'access-token' : token()
      }
    })
  },
  deleteTask (taskId) {
    return Api.delete(`api/task/${taskId}`, {
      headers: {
        'access-token' : token()
      }
    })
  },
  getTask (userId) {
    return Api.get(`api/task/${userId}`, {
      headers: {
        'access-token' : token()
      }
    })
  },
}