const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
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
         // "fs": false,
         "fs": require.resolve("browserify-fs"),
         // "fs": require.resolve("fs.promises"),
         // "fs": require.resolve("browserfs"),
         "url": require.resolve("url/"),
         "https": require.resolve("https-browserify"),
         "http": require.resolve("stream-http"),
         "stream": require.resolve("stream-browserify"),
         "path": require.resolve("path-browserify"),
         "process": require.resolve('process'),
         "process/browser": require.resolve('process/browser'),
         "buffer": require.resolve("buffer"),
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
      // new webpack.DefinePlugin({
      //    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      //    'process.env.MY_ENV': JSON.stringify(process.env.MY_ENV),
      //    }),
      new webpack.ProvidePlugin({
         process: 'process/browser',
         Buffer: ["buffer", "Buffer"],
      }),
   ],
};

