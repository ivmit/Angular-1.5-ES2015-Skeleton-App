/**
 * Created by imitrache on 11/10/2016.
 */
var webpack = require('webpack'),
    path = require('path'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    webpackConfig = require('webpack-config').Config;
    ExtractTextPlugin = require('extract-text-webpack-plugin');


var define = new webpack.DefinePlugin({DEBUG_CONFIG: true}),
    copySources = new CopyWebpackPlugin([
        {
            form: './index.html'
        },
        {
            context: './app/images',
            from: '**/*.{jpg,png,svg}',
            to: 'images'
        }
    ]);

module.exports = new webpackConfig().merge({
    cache: true,
    devtool:"source-map",
    context: __dirname,
    entry: './app/app.module.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.js'
    },
    resolve: {
        root: __dirname + '/src',
        extensions: ['', '.js', '.json']
    },
    resolveLoader: {
        modulesDirectories: ['node_modules']
    },
    modules: {
        preloaders:[
            {
                test: '/\.js$/',
                exclude: /(node_modules|bower_components)/,
                loader: 'eslint-loader'
            }
        ],
        loaders:[
            {
                test: '/\.js$/',
                exclude: /(node_modules|bower_components)/,
                loader: 'ng-annotate!babel'
            },
            {
                test: '/\.scss$/',
                loader: 'style!css!sass'
            },
            {
                test: /\.html$/,
                loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname)) + '/!html'
            }
        ]
    },
    plugins: [
        define,
        //extractCss,
        copySources
    ]
});