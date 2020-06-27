import axios from 'axios'

const token = process.env.VUE_APP_ACCESS_TOKEN

// Axios Instance
const axiosConfig = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL
})

// Add Access Token
const addToken = config => {
  if (token) {
    config.headers.Authorization = `${token}`
  }
}

// Request Interceptor
axiosConfig.interceptors.request.use(
  config => {
    addToken(config)
    return config
  },
  error => Promise.reject(error)
)

export default axiosConfig
