import axios from 'axios'
const instance = axios.create({
  baseURL: process.env.VUE_APP_APIURL,
  headers: {'Content-Type': 'application/json'}
})
const token = localStorage.getItem('token')
instance.defaults.headers.common['access-token'] = token ? token : null

export default instance


