const path = require('path');
module.exports = {
    entry: './src/main.jsx',

    resolve: {
        extensions: ['.js', '.jsx', 'css', '.json'],
    },
    module: {
        rules: [{
            test: /\.(jsx|js)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['es2015', 'react']
                }
            }
        },
        {
            test: /\.ejs$/,
            use: ['ejs-loader'],
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }],
    },
}