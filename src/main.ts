import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { applyPolyfills, defineCustomElements } from 'windmail/loader'

Vue.config.productionTip = false
Vue.config.ignoredElements = [/w-\w*/]

applyPolyfills().then(() => {
    defineCustomElements(window)
})

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
