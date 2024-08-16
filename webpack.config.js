const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/client/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: process.env.NODE_ENV,
  plugins: [
    new HtmlWebpackPlugin({
      title: "development",
      template: "./src/index.html",
    }),
  ],
  devServer: {
    historyApiFallback: true,
    static: {
      publicPath: "/dist",
      directory: path.resolve(__dirname, "dist"),
    },
    hot: true,
    proxy: [
      {
        context: ["/"],
        target: "http://localhost:3000",
      },
    ],
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              ["@babel/preset-react", { targets: "defaults" }],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      { test: /\.svg$/, loader: "svg-inline-loader" },
    ],
  },
};
