const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
   mode: "production",
   entry: {
      background: path.resolve(__dirname, ".", "src", "background.js"),
   },
   devServer: {
    "writeToDisk": true,
    "port": 8080, // other devServer options as needed
    "publicPath": path.join(__dirname, "./dist"),// additional devServer configurations
   },
   output: {
      path: path.join(__dirname, "./dist/js"),
      filename: "[name].js",
   },
   resolve: {
      extensions: [".ts", ".js"],
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/,
         },
      ],
   },
   plugins: [
      new CopyPlugin({
         patterns: [{from: '.', to: '../',context: "public"}]
      }),
   ],
};

