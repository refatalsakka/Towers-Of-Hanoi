const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    // 'css/classes.css': './src/css/classes.css',
    'css/style.css': './src/css/style.css',
    // 'css/variable.css': './src/css/variable.css',

    'js/app.js': './src/js/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name]',
  },
  devtool: 'source-map',
  // optimization: {
  //   minimize: true,
  // },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.ttf$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts',
          },
        },
      },
    ],
  },
};
