const { resolve } = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    mode: 'development',
    entry: './js/btnChoice.js',
    output: {
        filename: 'main.[contenthash].js'
    },
    devServer: {
        port: 9000,
        hot: true,
        static: './'
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        }),
        new CopyPlugin({
            patterns: [
                { from: "mp3", to: "mp3" },
            ],
        }),
        // new BundleAnalyzerPlugin()
    ]
};
