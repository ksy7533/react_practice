const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval',

  resolve: {
    extensions: ['.js', '.jsx'], // 웹팩에서 읽어드리는 파일 확장자명
  },

  entry: {
    app: ['./client'],
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1% in KR'],
            }
          }],
          '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties'],
      }
    }]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true}),
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
};
