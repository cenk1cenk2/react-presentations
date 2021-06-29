const CracoEsbuildPlugin = require('craco-esbuild')
const path = require('path')

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

      return webpackConfig
    }
  },
  devServer: {
    port: process.env.CRACO_PORT
  },
  plugins: [ { plugin: CracoEsbuildPlugin } ]
}
