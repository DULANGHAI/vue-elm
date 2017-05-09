/**
 * 配置开发环境和产品环境之间的切换
 * http请求中一些参数如果是下面这样的是会被禁止的
 *Origin:http://localhost:8080
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 */
let baseUrl;
let routerMode;
const imgBaseUrl = 'https://fuss10.elemecdn.com';

if (process.env.NODE_ENV == 'development') {
  baseUrl = '';
  routerMode = 'hash'
}else{
  baseUrl = 'https://mainsite-restapi.ele.me';
  routerMode = 'hash'
}

export {
  baseUrl,
  routerMode,
  imgBaseUrl
}
