const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const WatchExternalFilesPlugin = require('webpack-watch-files-plugin').default

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
      add: [],
      remove: []
    },
    configure: (webpackConfig, { paths }) => {
      webpackConfig.output.path = paths.appBuild = path.resolve('dist')

      webpackConfig.resolve.plugins.push(new TsconfigPathsPlugin({}))

      if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'develop') {
        webpackConfig.plugins.push(
          new WatchExternalFilesPlugin({
            files: [ path.join(process.cwd(), '../../packages/tailwind-configuration/dist/**'), path.join(process.cwd(), '../../craco.config.js') ],
            verbose: true
          })
        )
      }

      return webpackConfig
    }
  },
  babel: {
    plugins: [ 'babel-plugin-twin', 'babel-plugin-macros' ]
  },
  devServer: {
    port: process.env.CRACO_PORT ? process.env.CRACO_PORT : 3000
  }
}
