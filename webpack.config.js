const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  plugins: [
    new HtmlWebpackPlugin({ title: 'development', template: './index.html' }),
  ],
  devServer: {
    historyApiFallback: true,
    static: {
      publicPath: '/dist',
      directory: path.resolve(__dirname, 'dist'),
    },
    hot: true,
    proxy: [
      {
        context: ['/'],
        target: 'http://localhost:3000',
      },
    ],
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              ['@babel/preset-react', { targets: 'defaults' }],
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      { test: /\.svg$/, loader: 'svg-inline-loader' },
    ],
  },
};
