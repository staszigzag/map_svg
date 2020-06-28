module.exports = {
  configureWebpack: {
  },
  productionSourceMap: process.env.NODE_ENV !== 'production',
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_mixins.scss";
        `
      }
    }
  }
}
