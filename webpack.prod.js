const { merge } = require('webpack-merge');
const combined = require('./webpack.merge');

module.exports = merge(combined, {
    mode: 'production'
});