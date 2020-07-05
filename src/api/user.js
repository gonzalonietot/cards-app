import axios from 'axios'

export default {
  createUser (data) {
    return axios.post('http://localhost:3000/api/user/', data)
  }
}