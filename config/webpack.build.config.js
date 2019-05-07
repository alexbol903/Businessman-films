// Mode building

const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    publicPath: './'
  },
	plugins: []
});

module.exports = new Promise((resolve, reject) => {
	resolve(buildWebpackConfig);
});
