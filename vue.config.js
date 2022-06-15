const path = require('path')
const VconsoleWebpackPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'css': '@/assets/css',
        'common': '@/common',
        'components': '@/components',
        'util':'@/util',
        'network': '@/network',
        'views': '@/views',
      }
    },
    plugins: [
      // new VconsoleWebpackPlugin()
    ]
  },
}
