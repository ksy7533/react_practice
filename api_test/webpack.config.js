const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  devtool: "cheap-eval-source-map",

  resolve: {
    extensions: [".js", ".jsx"] // 웹팩에서 읽어드리는 파일 확장자명
  },

  entry: {
    // app: ["./client"]
    app: ["@babel/polyfill", "./client"]
  },

  devServer: {
    historyApiFallback: true,
    open: true,
    overlay: true,
    port: 3000
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 1% in KR"]
                }
              }
            ],
            "@babel/preset-react"
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-hot-loader/babel"
          ]
        }
      }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),

    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ],

  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/" // css, html 파일안에 있는 url 경로의 위치를 잡아준다 ex) "/" 있다면 현재 loacalhost:3000/ 여기부터 뒤에 경로를 붙여서 가져온다, devServer 경로 잡아줄때도
  }
};
