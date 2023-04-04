'use strict'

const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    entry:'./main.js',
    output: {
        filename: '[name].js',
        path: __dirname + '/main',
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    target: "electron-main"
}

