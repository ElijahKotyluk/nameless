const TerserPlugin = require('terser-webpack-plugin')

const env = require('yargs').argv.env
const path = require('path')
const pkg = require('./package.json')

let libraryName = pkg.name

if (env === 'build') {
  mode = 'production'
  outputFile = libraryName + '.min.js';
} else {
  mode = 'development'
  outputFile = libraryName + '.js';
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  devServer:{
    port: 3000,
    contentBase: __dirname + '/lib',
    inline: true
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'lib'),
          path.join(__dirname, 'src'),
          path.join(__dirname, 'test')
        ],
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  optimization: {
    minimizer: [new TerserPlugin()]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  }
}
