import axios from 'axios'
import Vue from 'vue'
import router from './router'


const http = axios.create({
        //默认url地址
        baseURL: process.env.VUE_APP_API_URL || '/admin/api',
    })
    //http请求拦截器
http.interceptors.request.use(function(config) {
    //token的校验
    if (localStorage.token) {
        config.headers.Authorization = 'Bearer ' + localStorage.token
    }
    return config;
}, function(error) {
    // 错误提示
    return Promise.reject(error);
});

//http拦截器，如果不报错返回接口返回值，报错则进一步处理
http.interceptors.response.use(res => {
    return res
}, err => {
    //错误信息处理
    if (err.response.data.message) {
        Vue.prototype.$message({
            type: 'error',
            message: err.response.data.message
        })
        if (err.response.status === 401) {
            router.push('/login')
        }
    }
    return Promise.reject(err)
})

export default http