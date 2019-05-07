// Base configuration

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
	src: path.resolve(__dirname, '../src'),
	dist: path.resolve(__dirname, '../dist'),
	assets: 'assets/'
};

module.exports = {
	externals: {
		paths: PATHS
	},

	entry: `${PATHS.src}/index.js`,
	output: {
		filename: `${PATHS.assets}js/[name].js`,
		path: PATHS.dist,
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.(png|jpe?g|gif|svg|ico)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: `${PATHS.assets}img`
					}
				}
			},
			{
				test: /\.(webm|mp4)$/,
				loader: 'file',
				query: {
          name: '[name].[ext]',
          outputPath: `${PATHS.assets}videos`
				}
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true }
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							config: {
								path: `${PATHS.src}/js/postcss.config.js`
							}
						}
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: true }
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true }
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							config: {
								path: `${PATHS.src}/js/postcss.config.js`
							}
						}
					}
				]
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader'
				}
			}
		]
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: `${PATHS.assets}css/[name].css`
		}),
		new HtmlWebpackPlugin({
			hash: false,
			template: `${PATHS.src}/index.html`
		}),
		new CopyWebpackPlugin([
			{ from: `${PATHS.src}/videos`, to: `${PATHS.assets}videos` },
			{ from: `${PATHS.src}/static`, to: `${PATHS.assets}static` },
		])
	]
};
