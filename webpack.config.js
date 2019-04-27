const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./client/src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/build/",
    filename: "bundle.js"
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    // mode: "development",
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
          // plugins: [
          //   new HtmlWebpackPlugin({
          //     template: "client/index.html"
          //   })
          // ]
        }
      },

      {
        test: /\.css$/,
        use: "css-loader"
      }
    ]
  }
};
