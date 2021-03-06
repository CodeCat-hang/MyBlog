import axios from 'axios'

const http = axios.create({
    baseURL: process.env.VUE_APP_API_URL || '/web/api',
    // baseURL: 'http://localhost:3000/web/api',
    timeout: 20 * 1000, // Timeout
})

export default http;