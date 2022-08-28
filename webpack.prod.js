const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {

    mode: 'production',

    entry: {
        index: path.resolve(__dirname, './src/index.js')
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.prod.js',

    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/template.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        
    ],
    module: {
        rules: [
            {
               test: /\.css$/,
               exclude: /styles\.css$/,
               use: ["style-loader", "css-loader"]
            },

            {
                test: /styles\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader"
                ]
            },
  
        ]
    }
}