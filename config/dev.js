const merge = require('webpack-merge');
const base = require('./base');
const path = require('path');
const dev = {
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.ejs',
            filename: './index.html',
            cache: true
        }),
    ],
    devServer: {
        hot: true,
        contentBase: [path.join(__dirname, './')],
        port: 8123,
        open: true
    }
}
module.exports = merge(base, dev);