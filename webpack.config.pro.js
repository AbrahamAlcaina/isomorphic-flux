var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = require('./webpack.config.js');
config.watch = false;
module.exports =config;
