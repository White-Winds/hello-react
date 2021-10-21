const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        proxy('/api1', {//请求中带有api1前缀的，触发代理配置
            target: 'http://localhost:5000',//请求转发给谁
            changeOrigin: true,//控制服务器收到的请求头中Host的值
/*
     changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
     changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
     changeOrigin默认值为false，但我们一般将changeOrigin值设为true
*/
            pathRewrite: { '^/api1': '' }//去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
        })
        // proxy('/api2', {
        //     target: 'http://localhost:5001',
        //     changeOrigin: true,
        //     pathRewrite: { '^/api2': '' }
        // })
    )}