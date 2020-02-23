import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import tag from './modules/tag'

Vue.use(Vuex)

const plugins: any = []
if (process.env.NODE_ENV === 'development') {
    plugins.push(createLogger())
}

export default new Vuex.Store({
    plugins,
    state: {},
    mutations: {},
    actions: {},
    modules: {
        tag,
    },
})
