const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Output",
    }),
  ],
  entry: './src/app.js',
output: {
  filename: '[name].bundle.js',
  path: path.resolve(__dirname, 'dist')
},
module: {
    rules: [
        {
            test: /\.html$/,
            use: {
              loader: "html-loader",
              options: {
                attrs: [":src"]
              }
            }
          },
          {
            test: /\.(mp4|svg|png|jpe?g|gif)$/,
            use: {
              loader: "file-loader",
              options: {
                name: "[name].[hash].[ext]"
              }
            }
        }
        
    ]
}
};