module.exports = {
  /* 配置别名 */
  configureWebpack:{
    resolve:{
      /* 解决路径相关问题 */
      alias:{
        components:'@/components',
        views:'@/views',
        common:'@/common',
        assets:'@/assets',
        network:'@/network',
      }
    }
  }
}