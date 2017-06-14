const { readFileSync } = require('fs')
const webpack = require('webpack')

const babelSettings = JSON.parse(readFileSync('.babelrc'));

module.exports = {
  entry: {
    'index': [ './src/index.js' ]
  },
  resolve: {
    extensions: [ '.js', '.html' ]
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    chunkFilename: '[name].[id].js',
    libraryTarget: 'umd',
    library: 'CTAs'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'API_URL': JSON.stringify(process.env.API_URL)
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(html|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: babelSettings
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'svelte-loader'
      }
    ]
  },
  // devtool: 'inline-source-map'
};
