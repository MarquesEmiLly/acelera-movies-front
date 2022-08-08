import axios from 'axios'
/* import env from 'react-dotenv'

const getURLBackend = () => {
  if (env) {
    const { URL_BACKEND } = env

    return URL_BACKEND
  }
  return 'http://localhost:9000/'
} */

export const client = axios.create({
  baseURL: 'http://localhost:9000'
})
