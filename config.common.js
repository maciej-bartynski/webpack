var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CSSWebpackPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        print: './src/print.js',
        app: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    CSSWebpackPlugin.loader, 
                    'css-loader', 
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunks: ['print'],
            filename: 'errorpage.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunks: ['app'],
            filename: 'homepage.html'
        }),
        new CleanWebpackPlugin(['dist']),
        new CSSWebpackPlugin({filename: '[name].css'})
    ],
}