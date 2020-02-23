import { axios } from '@/utils/request'

const api = {
    save: '/tag/save',
    queryParentTags: '/tag/queryParentTags',
    update: '/tag/update',
    findById: '/tag/findById',
    delById: '/tag/delById',
    tags: '/tag/page',
    modifyTagById: '/tag/modifyTagById',
    queryItems: '/common/queryItems',
}

export default api

export function getTagList(parameter) {
    return axios({
        url: api.tags,
        method: 'post',
        data: parameter,
    })
}

export function getTag(parameter) {
    return axios({
        url: api.findById,
        method: 'post',
        data: parameter,
    })
}

export function saveTag(parameter) {
    return axios({
        url: api.save,
        method: 'post',
        data: parameter,
    })
}

export function updateTag(parameter) {
    return axios({
        url: api.update,
        method: 'post',
        data: parameter,
    })
}

export function updateStatus(parameter) {
    return axios({
        url: api.modifyTagById,
        method: 'post',
        data: parameter,
    })
}

export function delById(parameter) {
    return axios({
        url: api.delById,
        method: 'post',
        data: parameter,
    })
}

export function queryParentTags(parameter) {
    return axios({
        url: api.queryParentTags,
        method: 'post',
        data: parameter,
    })
}

export function queryItems(parameter) {
    return axios({
        url: api.queryItems,
        method: 'post',
        data: parameter,
    })
}
