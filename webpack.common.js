const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    test_insects: './src/test_insects.js',
    test_yavlenia: './src/test_yavlenia.js',
    test: './src/test.js'
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
        test: /\.(ttf|otf|woff|woff2|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
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
      template: './src/about.html',
      filename: './about.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/tests.html',
      filename: './tests.html'
    }),
    

    new HtmlWebpackPlugin({
      template: './src/literature.html',
      filename: './literature.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
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
      template: './src/styleguide.html',
      filename: './styleguide.html'
    }),


    new HtmlWebpackPlugin({
      template: './src/color/why_do_leaves_change_color.html',
      filename: './color/why_do_leaves_change_color.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/color/vodorosli.html',
      filename: './color/vodorosli.html'
    }),
    

    new HtmlWebpackPlugin({
      template: './src/feno/feno_article1.html',
      filename: './feno/feno_article1.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/feno/listopad.html',
      filename: './feno/listopad.html'
    }),


    new HtmlWebpackPlugin({
      template: './src/feno/feno_article2.html',
      filename: './feno/feno_article2.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/feno/cvetenie.html',
      filename: './feno/cvetenie.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/geo/sloi_gornyh_porod.html',
      filename: './geo/sloi_gornyh_porod.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/geo/seismicheskaya.html',
      filename: './geo/seismicheskaya.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/geo/geo_article2.html',
      filename: './geo/geo_article2.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/habitat/cows_lie_down_before_rain.html',
      filename: './habitat/cows_lie_down_before_rain.html'
    }), 

    new HtmlWebpackPlugin({
      template: './src/habitat/flypovedenie.html',
      filename: './habitat/flypovedenie.html'
    }),

    

    new HtmlWebpackPlugin({
      template: './src/advice/ecoprivichki.html',
      filename: './advice/ecoprivichki.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/advice/read_signals.html',
      filename: './advice/read_signals.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/advice/signals.html',
      filename: './advice/signals.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/habitat/povedenie_zhivotnyh_pered_stihiynymi_bedstviami.html',
      filename: './habitat/povedenie_zhivotnyh_pered_stihiynymi_bedstviami.html'
    }), 
    new HtmlWebpackPlugin({
      template: './src/habitat/migratsya_ptiz.html',
      filename: './habitat/migratsya_ptiz.html'
    }),


    new HtmlWebpackPlugin({
      template: './src/sound/ptichi_treli.html',
      filename: './sound/ptichi_treli.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/sound/sound_article2.html',
      filename: './sound/sound_article2.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/sound/zvuk_dereviev.html',
      filename: './sound/zvuk_dereviev.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/structure/godichnye_koltsa_dereviev.html',
      filename: './structure/godichnye_koltsa_dereviev.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/structure/molluski.html',
      filename: './structure/molluski.html'
    }),


    new HtmlWebpackPlugin({
      template: './src/tests/lakes.html',
      filename: './tests/lakes.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/tests/yavlenia.html',
      filename: './tests/yavlenia.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/tests/insects.html',
      filename: './tests/insects.html'
    }),


    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/images/styleguide/favicon.png'),
          to: path.resolve(__dirname, './dev_build/images/favicon.png')
        },
        {
          from: path.resolve(__dirname, './src/images/styleguide/favicon.png'),
          to: path.resolve(__dirname, './docs/images/favicon.png')
        }
      
      ]
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




