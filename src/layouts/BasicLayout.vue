<template>
    <el-container>
        <el-header class="header">
            <div class="title">
                <el-avatar
                    :size="36"
                    shape="square"
                    src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
                >
                </el-avatar>
                项目名称
            </div>
            <div class="info">
                <el-badge is-dot class="item">
                    <i class="el-icon-bell"></i>
                </el-badge>
                <span>你好，东方月初</span>
                <el-avatar
                    :size="32"
                    src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                >
                </el-avatar>
            </div>
        </el-header>
        <el-container>
            <el-aside width="220px" class="aside">
                <el-menu
                    :default-active="active"
                    class="menu"
                    @open="handleOpen"
                    @close="handleClose"
                    :router="true"
                >
                    <el-menu-item index="/home">
                        <i class="el-icon-menu"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-menu-item index="/about">
                        <i class="el-icon-document"></i>
                        <span slot="title">关于</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: 'BasicLayout',
    data() {
        return {
            active: '',
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath)
        },
        errorHandler() {
            return true
        },
    },
    created() {
        this.active = this.$route.path
    },
}
</script>

<style lang="postcss" scoped>
.header {
    background: #2d3664;
    color: #fff;
    display: flex;
    font-size: 16px;
    justify-content: space-between;
}

.title {
    align-items: center;
    display: flex;
    font-size: 20px;

    & .el-avatar {
        margin-right: 10px;
    }
}

.info {
    align-items: center;
    color: #fff;
    display: flex;

    & .el-badge {
        font-size: 20px;
        margin-right: 34px;
    }

    & .el-avatar {
        margin-left: 10px;
    }
}

.aside {
    background: #fff;
    height: calc(100vh - 60px);
    padding-top: 40px;
}

.menu {
    border-right: none;
    text-align: left;

    & .el-menu-item {
        border-left: 3px solid transparent;
    }

    & .is-active {
        border-left: 3px solid #0766ff;
    }
}
</style>
