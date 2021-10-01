const path = require("path");
module.exports = {
  //代码保存时是否进行eslint检测
  lintOnSave: false,

  //配置代理
  devServer: {
    //服务启动是否自动打开浏览器
    open: true,
    //配置代理 仅开发环境可用
    proxy: {
      "/api": {
        // 允许访问数据的计算机名称及端口
        target: 'http://localhost:3000',
        ws: true, //启用webSocket
        changeOrigin: true, //开启代理跨域
        pathRewrite: {
          // 重写api地址
          '^/api': ""
        }
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        import: '~@/common/stylus/mixins.styl',
        globalVars: {
          primary_bg: '#f00'
        }
      }
    }
  },
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStyleResource(config.module.rule("stylus").oneOf(type))
    );
  },

}

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/common/stylus/mixins.styl")] //后面跟着的路径改成你自己放公共stylus变量的路径
    })
}
