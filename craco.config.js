const path = require('path')
const WatchExternalFilesPlugin = require('webpack-watch-files-plugin').default
const defu = require('defu')

module.exports = {
  style: {
    postcss: {
      plugins: [ require('tailwindcss'), require('autoprefixer') ]
    }
  },
  eslint: {
    enable: false
  },
  webpack: {
    alias: {},
    plugins: {
      add: [
        new WatchExternalFilesPlugin({
          files: [ path.join(process.cwd(), '../../packages/tailwind-configuration/dist/**'), path.join(process.cwd(), '../../craco.config.js') ],
          verbose: true
        })
      ],
      remove: []
    },
    configure: (webpackConfig, { paths }) => {
      webpackConfig.output.path = paths.appBuild = path.resolve('dist')

      return webpackConfig
    }
  },
  babel: {
    plugins: [ 'babel-plugin-twin', 'babel-plugin-macros' ]
  },
  devServer: {
    port: process.env.CRACO_PORT
  }
}
