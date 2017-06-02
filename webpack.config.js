const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  // Webpack static app
  entry: './public/app.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },


	module: {
	  rules: [
      {
        enforce: 'pre',
        test: /\.scss$/,
        loader: 'sasslint-loader',
        exclude: /(node_modules)/,
      },
	    {
	      test: /\.scss$/,
	      use: ExtractTextPlugin.extract({
	        fallback: 'style-loader',
	        use: ['css-loader', 'sass-loader']
	      })
	    },
      {
        test: /\.js$/,
        exclude: /(node_modules|dist)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules|dist)/,
        loader: 'eslint-loader',
      },
    ]
	},
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};
