<template>
    <div class="exception">
        <div class="imgBlock">
            <div class="imgEle" :style="{ backgroundImage: `url(${config[type].img})` }"></div>
        </div>
        <div class="content">
            <h1>{{ config[type].title }}</h1>
            <div class="desc">{{ config[type].desc }}</div>
            <div class="actions">
                <el-button type="text" @click="handleToHome">返回首页</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import types from './type'

export default {
    name: 'Exception',
    props: {
        type: {
            type: String,
            default: '404',
        },
    },
    data() {
        return {
            config: types,
        }
    },
    methods: {
        handleToHome() {
            this.$router.push({ name: 'index' })
        },
    },
}
</script>
<style>
.exception {
    align-items: center;
    display: flex;
    height: 80%;
    min-height: 500px;
}

.imgBlock {
    flex: 0 0 62.5%;
    padding-right: 152px;
    width: 62.5%;
    zoom: 1;
}

.imgEle {
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
    float: right;
    height: 360px;
    max-width: 430px;
    width: 100%;
}
</style>
