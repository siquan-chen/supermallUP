module.exports = {
  /* 配置别名 */
  configureWebpack: {
    resolve: {
      /* 解决路径相关问题 */
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': 'src/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}