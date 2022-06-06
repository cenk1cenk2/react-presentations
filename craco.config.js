const { addAfterLoader, loaderByName, addPlugins } = require('@craco/craco')
const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const WatchExternalFilesPlugin = require('webpack-watch-files-plugin').default

/** @type {import("@craco/craco").CracoConfig} */
module.exports = {
  style: {
    postOptions: {
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

      addPlugins(webpackConfig, [ new TsconfigPathsPlugin({}) ])

      if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'develop') {
        addPlugins(webpackConfig, [
          new WatchExternalFilesPlugin({
            files: [ path.join(process.cwd(), '../../tailwind.config.js'), path.join(process.cwd(), '../../craco.config.js') ],
            verbose: true
          })
        ])
      }

      addAfterLoader(webpackConfig, loaderByName('babel-loader'), {
        test: /\.(md|mdx)$/,
        loader: require.resolve('@mdx-js/loader')
      })

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
