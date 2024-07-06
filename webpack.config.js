const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
   mode: "production",
   entry: {
      background: path.resolve(__dirname, ".", "src", "background.ts"),
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
      fallback: {
         //"crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
         "fs": false,
         "url": require.resolve("url/"),
         "https": require.resolve("https-browserify"),
         "http": require.resolve("stream-http"),
         "stream": require.resolve("stream-browserify"),
         "path": require.resolve("path-browserify")
      }
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

