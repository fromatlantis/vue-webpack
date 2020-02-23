const path = require('path')
const webpack = require('webpack')

// vue.config.js
const vueConfig = {
    configureWebpack: {
        // webpack plugins
        plugins: [
            // Ignore all locale files of moment.js
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        ],
    },

    css: {
        // loaderOptions: {
        //     sass: {
        //         // @是src的别名
        //         prependData: `
        //             @import "@/theme/init.scss";
        //         `,
        //     },
        // },
    },

    devServer: {
        // development server port 8000
        port: 8080,
        // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
        proxy: {
            '/api': {
                target: 'http://ip:8003',
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/',
                },
            },
        },
    },

    // disable source map in production
    productionSourceMap: false,
    lintOnSave: undefined,
    // babel-loader no-ignore node_modules/*
    transpileDependencies: [],
}

module.exports = vueConfig
