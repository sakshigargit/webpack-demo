var path = require('path');
var DEBUG = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

module.exports = {
  entry: {
    index: ['./app/entry.js'] // we can use default one as well without defining entry
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'index.html'
          }
        }
      },
      {
        test: /\.jpe?g$|\.svg$|\.png$/,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.(shader|vert|frag|geom)$/i,
        use: 'raw-loader'
      },
      {
          test: /\.css$/, loader: 'style-loader!css-loader'
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 8080
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
  ],
  devtool: DEBUG ? 'cheap-module-source-map' : false
};
