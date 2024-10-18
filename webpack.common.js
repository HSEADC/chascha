const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    

    // Landing page
    
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),




    new HtmlWebpackPlugin({
      template: './src/map.html',
      filename: './map.html'
    }),



    new HtmlWebpackPlugin({
      template: './src/literature/book.html',
      filename: './literature/book.html'
    }),


    new HtmlWebpackPlugin({
      template: './src/color.html',
      filename: './color.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/feno.html',
      filename: './feno.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/geo.html',
      filename: './geo.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/habitat.html',
      filename: './habitat.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/sound.html',
      filename: './sound.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/structure.html',
      filename: './structure.html'
    }),




    new HtmlWebpackPlugin({
      template: './src/color/color_article1.html',
      filename: './color/color_article1.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/feno/feno_article1.html',
      filename: './feno/feno_article1.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/geo/geo_article1.html',
      filename: './geo/geo_article1.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/habitat/habitat_article1.html',
      filename: './habitat/habitat_article1.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/sound/sound_article1.html',
      filename: './sound/sound_article1.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/structure/structure_article1.html',
      filename: './structure/structure_article1.html'
    }),




    
    // Internal pages
    // new HtmlWebpackPlugin({
    //   hash: true,
    //   scriptLoading: 'blocking',
    //   template: './src/pages/page.html',
    //   filename: './pages/page.html',
    //   chunks: ['page']
    // }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
