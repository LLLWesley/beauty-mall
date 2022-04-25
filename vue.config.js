module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': path.resolve(__dirname,'../src/assets'),
        'css': '@/assets/css',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
