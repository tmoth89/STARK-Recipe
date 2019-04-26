const path = require('path');

module.exports = {
  entry: './client/index.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
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