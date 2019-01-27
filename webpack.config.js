//webpack needs at least 2 things
//1 entry point (app.js inside of SRC dir)
//2 where to output file webpack builds

//we need an absolute path to the output folder
//run this file though node, node webpack.config.js
// console.log('path is ' + __dirname);

// add the node path module
const path = require('path');
// console.log(path.join(__dirname, 'public'));

module.exports = env => {
  const idProduction = env === 'production';
  console.log('env=', env);
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true //always server the index page let react router figure out what to display
    }
  };
};

//loader (how webpack transforms these files)
