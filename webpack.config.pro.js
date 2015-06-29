var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");
var config = require('./webpack.config.js');
config.watch = false;
config.plugins = [
    new webpack.optimize.UglifyJsPlugin({
        minimize: true, output: {comments: false}
    }),
    new ExtractTextPlugin("css/[name].css")
]
module.exports = config;
