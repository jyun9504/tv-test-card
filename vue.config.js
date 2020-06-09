module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/assets/scss/main.scss";
        `
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/video-test-card/dist/' : '/'
}