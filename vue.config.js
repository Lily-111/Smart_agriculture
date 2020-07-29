module.exports = {
  lintOnSave: false ,//如果为false，就是取消eslint规则的检查
    devServer: {
      proxy: {
        "/api": {
          target: "https://iam.cn-north-4.myhuaweicloud.com",
          changeOrigin: true,
          secure: false,
          ws: true,
          pathRewrite: {
            "^/api": " "
          }
        },
        "/iotat":{
          target: "https://iotda.cn-north-4.myhuaweicloud.com",
          changeOrigin: true,
          secure: false,
          ws: true,
          pathRewrite: {
            "^/iotat": " "
          }
        }
      }
    }
  };