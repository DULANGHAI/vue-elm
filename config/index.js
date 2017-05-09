// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../elmApp/index.html'),
    assetsRoot: path.resolve(__dirname, '../elmApp'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/elmApp/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8100,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/v1': {
        target: 'https://mainsite-restapi.ele.me',
        changeOrigin: true,
      },
      '/v2': {
        target: 'https://mainsite-restapi.ele.me',
        changeOrigin: true,
      },
      '/bgs': {
        target: 'https://mainsite-restapi.ele.me',
        changeOrigin: true,
      },
    },
    // context: [ //代理路径
    //   '/shopping',
    //   '/bgs',
    //   '/ugc',
    //   '/v1',
    //   '/v2',
    //   '/v3',
    //   '/v4',
    //   '/bos',
    //   '/member',
    //   '/promotion',
    //   '/eus',
    // ],
    // proxypath: 'https://mainsite-restapi.ele.me',

    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}