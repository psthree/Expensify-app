//webpack needs at least 2 things
//1 entry point (app.js inside of SRC dir)
//2 where to output file webpack builds

//we need an absolute path to the output folder
//run this file though node, node webpack.config.js
// console.log('path is ' + __dirname);

// add the node path module
const path = require('path');
// console.log(path.join(__dirname, 'public'));
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = env => {
  const isProduction = env === 'production';
  console.log('env = ', env);
  const CSSExtract = new ExtractTextPlugin('styles.css');
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
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }
      ]
    },
    plugins: [CSSExtract],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true //always server the index page let react router figure out what to display
    }
  };
};

//loader (how webpack transforms these files)
