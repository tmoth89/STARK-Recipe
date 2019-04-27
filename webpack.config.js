const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
<<<<<<< HEAD
  entry: './client/src/index.js',
  mode: 'production',
=======
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
>>>>>>> c8ac0407bbb01006a098679cc3314da1c936cd90
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
<<<<<<< HEAD
      },{
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
}
=======
      },

      {
        test: /\.css$/,
        use: "css-loader"
      }
    ]
  }
};
>>>>>>> c8ac0407bbb01006a098679cc3314da1c936cd90
