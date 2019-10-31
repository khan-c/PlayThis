var path = require("path");
var webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var plugins = []; // if using any plugins for both dev and production
var devPlugins = []; // if using any plugins for development

var prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
];

plugins = plugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
);

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: './frontend/play_this.jsx',
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: 'bundle.js',
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/react']
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
