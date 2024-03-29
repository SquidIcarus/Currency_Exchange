const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
    },
    plugins: [
        new Dotenv(),
        new ESLintPlugin(),
        new CleanWebpackPlugin({
            verbose: true
        }),
        new HtmlWebpackPlugin({
            title: 'Shape Tracker',
            template: './src/index.html',
            inject: 'body'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(gif|png|avif|jpe?g)$/,
                type: "asset/resource",
                generator: {
                    filename: "[name][ext]",
                    publicPath: "assets/images/",
                    outputPath: "assets/images/",
                },
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};