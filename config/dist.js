const merge = require('webpack-merge');
const base = require('./base');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const lib = {
    output: {
        path: path.resolve(__dirname, '../lib'),
        publicPath: '/',
        filename: 'e-loading.js',
        library: "Eloading",
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
        classnames: 'classnames'
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
}
module.exports = merge(base, lib);