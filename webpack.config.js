var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: './src/client/client.js',
    output: {
        path: './build',
        publicPath: '/public',
        filename: 'js/[name].js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'css-loader!autoprefixer-loader'
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader!autoprefixer-loader")
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel']
        }, {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loaders: ['babel?blacklist=validation.react']
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
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
