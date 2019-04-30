const path = require("path");

module.exports = {

  entry: './client/src/index.js',
  mode: 'production',
  entry: "./client/src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/build/",
    filename: "bundle.js"
  },
  devServer: {
    inline: true,
    port: 8080,
    proxy: { "/search": "http://localhost:3000" },
    publicPath: "localhost:8080/build"
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
   }
  };
