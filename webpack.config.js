var ExtractTextPlugin = require('extract-text-webpack-plugin');
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
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }
        ]

    },
    plugins: [
        new ExtractTextPlugin('./bundles/bundle.css')
    ]
};