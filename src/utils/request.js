import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import { VueAxios } from './axios'
import { ACCESS_TOKEN } from '@/store/mutation-types'

// 创建 axios 实例
const service = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL, // api base_url
    timeout: 6000, // 请求超时时间
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
})

const err = error => {
    if (error.response) {
        const data = error.response.data
        const token = Vue.ls.get(ACCESS_TOKEN)
        if (error.response.status === 403) {
            Vue.prototype.$notify.error({
                title: 'Forbidden',
                message: data.message,
            })
        }
        if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
            Vue.prototype.$notify.error({
                title: 'Unauthorized',
                message: 'Authorization verification failed',
            })
            if (token) {
                store.dispatch('Logout').then(() => {
                    setTimeout(() => {
                        window.location.reload()
                    }, 1500)
                })
            }
        }
    }
    return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use(config => {
    const token = Vue.ls.get(ACCESS_TOKEN)
    if (token) {
        config.headers['Access-Token'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
    }
    return config
}, err)

// response interceptor
service.interceptors.response.use(response => {
    if (response.data.rspCode != '000000000') {
        Vue.prototype.$message.error(response.data.rspMsg)
        return Promise.reject(response)
    }
    return response.data
}, err)

const installer = {
    vm: {},
    install(Vue) {
        Vue.use(VueAxios, service)
    },
}

export { installer as VueAxios, service as axios }
