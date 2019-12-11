const path = require('path');
const webpack = require('webpack');

module.exports = {
  publicPath: process.env.PUBLIC_PATH,
  indexPath: process.env.INDEX_PATH,
  outputDir: process.env.OUTPUT_PATH,
  productionSourceMap: false,
  devServer: {
    inline: false,
    disableHostCheck: true,
    public: '8080.lvh.me',
    proxy: {
      '/api': {
        target: 'http://9500.lvh.me',
        changeOrigin: true,
      },
    },
  },

  chainWebpack: (config) => {
    config.performance
      .hints(false)
      .maxEntrypointSize(1024000)
      .maxAssetSize(1024000);

    config.plugin('provide')
      .use(webpack.ProvidePlugin, [{
        Utils: [path.resolve(__dirname, 'src/lib/utils'), 'default'],
      }]);

    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 1 }));

    if (process.env.NODE_ENV === 'production') {
      config.plugin('html')
        .tap((args) => {
          args[0].minify = {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: false,
          };

          return args;
        });
    }

    if (process.env.UPLOAD_RECEIVER) {
      config.plugin('upload')
        .use(require.resolve('webpack-upload'), [{
          receiver: process.env.UPLOAD_RECEIVER,
          to: process.env.UPLOAD_TO,
          data: {
            token: process.env.UPLOAD_TOKEN,
          },
        }]);
    }
  },

  css: {
    extract: true,
  },

  pluginOptions: {
    externals: {
      common: [
      ],
    },
  },
};
