const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const webpack = require("webpack");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ],
  },
 /* plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
  devServer: {
    compress: true,
    port: 3000
  }*/
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "public/js"),
    publicPath: "http://localhost:3000/js/",
    filename: "app.js"
  },
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    port: 3000,
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}