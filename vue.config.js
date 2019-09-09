const path = require('path')
module.exports = {
  devServer: {
    proxy: 'http://127.0.0.1:8000/'
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, "./src/scss/variables.scss"),
        path.resolve(__dirname, "./src/scss/mixin.scss")
      ]
    }
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  },
}