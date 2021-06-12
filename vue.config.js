const path = require('path');

const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  publicPath: '/planets/',
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@$': resolve('src'),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/__variables.scss";',
      },
    },
  },
};
