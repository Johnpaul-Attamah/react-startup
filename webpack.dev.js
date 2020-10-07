const path = require('path');
const { merge } = require('webpack-merge');
const combined = require('./webpack.merge');

module.exports = merge(combined, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000,
        hot: true
    }
});