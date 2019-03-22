const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pkg = require('./package.json');
const path = require('path');

const devMode = process.env.NODE_ENV !== 'production';
const libraryName= pkg.name;

module.exports = {
	entry: ['./src/index.js', './src/styles/scss/styles.scss'],
	output: {
		path: path.join(__dirname, '/dist'),
		// bundle to indexjs
		filename: 'index.js',

		//library name comes from package.json
		library: libraryName,

		// Universal module
		libraryTarget: 'umd',
		publicPath: '/',
		umdNamedDefine: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [{ loader: 'babel-loader' }],
			},
			{
				test: /\.html$/,
				use: [{ loader: 'html-loader', options: { minimize: true } }],
			},
			{
				test: /\.s?(a|c)ss$/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|jpe?g)/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: './src/assets/images/[name].[ext]',
							limit: 10000,
						},
					},
					{
						loader: 'img-loader',
					},
				],
			},
		],
	},
	devServer: {
		// Development server watches public and src for changes and HMR
		contentBase: ['./public', './src'],
		watchContentBase: true,
		inline: true,
		port: 3000,
		historyApiFallback: true,
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			favicon: './public/favicon.svg',
		}),
		// Makes some environment variables available in index.html.
		// The public URL is available as %PUBLIC_URL% in index.html, e.g.:
		// <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
		// In development, this will be an empty string.
		new InterpolateHtmlPlugin({
			PUBLIC_URL: '',
		}),
		new MiniCssExtractPlugin({
			//minify scss to styles.css
			filename: '[name].css',
			chunkFilename: '[id].css'
		}),
	],
	//React and react dom must be externals to act as components
	resolve: {
		alias: {
			react: path.resolve(__dirname, './node_modules/react'),
			'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
		},
	},
	externals: {
		// Don't bundle react or react-dom
		react: {
			commonjs: 'react',
			commonjs2: 'react',
			amd: 'React',
			root: 'React',
		},
		'react-dom': {
			commonjs: 'react-dom',
			commonjs2: 'react-dom',
			amd: 'ReactDOM',
			root: 'ReactDOM',
		},
	},
};
