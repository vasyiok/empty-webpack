var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: './source/js/main.es6',
    output: {
        filename: './bundles/bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.es6?$/,
                loaders: ['babel-loader', 'eslint-loader'],
                exclude: '/node_modules/'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }
        ]

    },
    plugins: [
        new ExtractTextPlugin('./bundles/bundle.css'),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      port: 4000,
      host: '127.0.0.1',
      headers: {'Access-Control-Allow-Origin': '*'}
    }
};