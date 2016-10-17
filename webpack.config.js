var webpack = require('webpack');
var postcss  = require('postcss');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    app: './index',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        options: {
          presets: ['es2015', 'react'],
          plugins: ['react-hot-loader/babel']
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style?sourceMap',
          loader: 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss',
          options: {
            context: __dirname,
            plugins: function () {
              return [
                // Transfer @import rule by inlining content, e.g. @import 'normalize.css'
                // https://github.com/postcss/postcss-import
                require('postcss-import'),
                // W3C variables, e.g. :root { --color: red; } div { background: var(--color); }
                // https://github.com/postcss/postcss-custom-properties
                require('postcss-custom-properties'),
                // W3C CSS Custom Media Queries, e.g. @custom-media --small-viewport (max-width: 30em);
                // https://github.com/postcss/postcss-custom-media
                require('postcss-custom-media'),
                // CSS4 Media Queries, e.g. @media screen and (width >= 500px) and (width <= 1200px) { }
                // https://github.com/postcss/postcss-media-minmax
                require('postcss-media-minmax'),
                // W3C CSS Custom Selectors, e.g. @custom-selector :--heading h1, h2, h3, h4, h5, h6;
                // https://github.com/postcss/postcss-custom-selectors
                require('postcss-custom-selectors'),
                // W3C calc() function, e.g. div { height: calc(100px - 2em); }
                // https://github.com/postcss/postcss-calc
                require('postcss-calc'),
                // Allows you to nest one style rule inside another
                // https://github.com/jonathantneal/postcss-nesting
                require('postcss-nesting'),
                // W3C color() function, e.g. div { background: color(red alpha(90%)); }
                // https://github.com/postcss/postcss-color-function
                require('postcss-color-function'),
                // Convert CSS shorthand filters to SVG equivalent, e.g. .blur { filter: blur(4px); }
                // https://github.com/iamvdo/pleeease-filters
                require('pleeease-filters'),
                // Generate pixel fallback for "rem" units, e.g. div { margin: 2.5rem 2px 3em 100%; }
                // https://github.com/robwierzbowski/node-pixrem
                require('pixrem'),
                // W3C CSS Level4 :matches() pseudo class, e.g. p:matches(:first-child, .special) { }
                // https://github.com/postcss/postcss-selector-matches
                require('postcss-selector-matches'),
                // Transforms :not() W3C CSS Level 4 pseudo class to :not() CSS Level 3 selectors
                // https://github.com/postcss/postcss-selector-not
                require('postcss-selector-not'),
                // Postcss flexbox bug fixer
                // https://github.com/luisrudge/postcss-flexbugs-fixes
                require('postcss-flexbugs-fixes'),
                // Add vendor prefixes to CSS rules using values from caniuse.com
                // https://github.com/postcss/autoprefixer
                require('autoprefixer'),
              ];
            }
          },
        }),
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader'
      }
    ],
  },
  devtool: 'source-map',
  context: path.resolve(__dirname, 'src'),
  devServer: {
    contentBase: './dist',
    inline: true,
    hot: true,
    port: 8080
  },
  plugins: [
    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash].css',
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
