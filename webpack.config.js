var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: './src/client/client.js',
    output: {
        path: './public',
        publicPath: '/public/',
        filename: 'js/[name].js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'css-loader?root=.!autoprefixer-loader'
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader?root=.!autoprefixer-loader!sass-loader")
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel?blacklist=validation.react'
        }, {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel?blacklist=validation.react'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }
        ,{test: /\.(ttf|woff|woff2|eot|svg)$/i, loader: 'url-loader?limit=10000' }]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css")
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map',
    watch: false,
    keepalive: true
};
