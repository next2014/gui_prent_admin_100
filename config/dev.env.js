'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
 // BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',
 BASE_API: '"http://localhost:9004"', //nginx 设置接口跳转地址

/////////// nginx 配置 //////////

//  server {
//   listen       9004;
//   server_name  localhost;

//   location ~ /eduservice/ {
//     proxy_pass http://localhost:8001;
//   }

//   location ~ /eduoss/ {
//     proxy_pass http://localhost:8002;
//   }
// }

})
