const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = () => {
    return {
        mode: 'development',
        entry: {
            app: './src/index.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[hash].js',
            publicPath: '/'
        },
        devtool: 'inline-source-map',
        devServer: {
            contentBase: './dist',
            historyApiFallback: true
        },
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react'
                            ],
                            plugins: [
                                '@babel/plugin-transform-arrow-functions',
                                '@babel/plugin-proposal-class-properties'
                            ]
                        }
                    }
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['src/']
                        }
                    }]
                },

                {
                    test: /\.(png|svg|jpg)$/,
                    use: 'file-loader'
                },

                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        'file-loader'
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['*', '.js']
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin(
                {
                    template: './src/index.html'
                }
            ),
            new CopyPlugin([
                {
                    from: path.join(__dirname, 'src/icons/'),
                    to: path.join(__dirname, '/icons/')
                }
            ]),

            new webpack.HotModuleReplacementPlugin()
        ]
    };
};
