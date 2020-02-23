import Vue from 'vue'
import Storage from 'vue-ls'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { VueAxios } from './utils/request'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './theme/reset.css'

// webcomponents
import { applyPolyfills, defineCustomElements } from 'windmail/loader'
Vue.config.ignoredElements = [/w-\w*/]
applyPolyfills().then(() => {
    defineCustomElements(window)
})

// vue-ls options
const storageOptions = {
    namespace: 'pro__', // key prefix
    name: 'ls', // name variable Vue.[ls] or this.[$ls],
    storage: 'local', // storage name session, local, memory
}

Vue.use(Storage, storageOptions)
Vue.use(ElementUI)
Vue.use(VueAxios)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
