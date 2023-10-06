import axios from 'axios'
import {BASE_URL} from './config.js'
// import router from '@/router'

console.log(BASE_URL)
// 超时时间
const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 50000
})


// http请求拦截器
// instance.interceptors.request.use(config => {
//     let token = sessionStorage.getItem('token')
//     if (token) {
//         // @ts-ignore
//         config.headers.Authorization = token
//     }
//     return config
// })

// http响应拦截器
// instance.interceptors.response.use(
// )

export default instance
