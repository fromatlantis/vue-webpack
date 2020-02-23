import Vue from 'vue'
import { getTag, getTagList, queryParentTags } from '@/api/tag'

const tag = {
    namespaced: true,
    state: {
        searchParams: {
            pageNum: 1,
            pageSize: 10,
        },
        tag: {},
        tags: [],
    },

    mutations: {
        SET_TAG_SEARCH_PARAMS: (state: any, params: any) => {
            state.searchParams = params
        },
        SET_TAGS: (state: any, tags: any) => {
            state.tags = tags
        },
        SET_TAG: (state: any, tag: any) => {
            state.tag = tag
        },
    },

    actions: {
        GetTagList({ commit, state }, data: any) {
            const params = {
                ...state.searchParams,
                ...data,
            }
            commit('SET_TAG_SEARCH_PARAMS', params)
            return new Promise((resolve, reject) => {
                getTagList(params)
                    .then((response: { rspData: any }) => {
                        commit('SET_TAGS', response.rspData)
                        resolve()
                    })
                    .catch((error: any) => {
                        reject(error)
                    })
            })
        },
        GetTag({ commit }: any, data: any) {
            return new Promise((resolve, reject) => {
                getTag(data)
                    .then((response: { rspData: any }) => {
                        commit('SET_TAG', response.rspData)
                        resolve()
                    })
                    .catch((error: any) => {
                        reject(error)
                    })
            })
        },
    },
}

export default tag
