const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');

const devMode = process.env.NODE_ENV !== 'production'
const path = require('path');

module.exports = {
    entry: ['./src/index.js', './src/styles/scss/styles.scss'],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'brokeReact.js',
        publicPath: '/',
        libraryTarget: 'commonjs',
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
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
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
        devMode ? new InterpolateHtmlPlugin({
            PUBLIC_URL: '',
        }) : console.log('Success: Skipping InterpolateHtmlPlugin for production'),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
    ],
    externals: [nodeExternals()]
};
