var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");
var config = require('./webpack.config.js');
config.watch = false;
config.plugins = [
    new webpack.optimize.UglifyJsPlugin({
        minimize: true, output: {comments: false}, mangle: true, compress: {
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true
    }
    }),
    new ExtractTextPlugin("css/[name].css")
]
module.exports = config;
