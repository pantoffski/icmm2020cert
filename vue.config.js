const path = require("path");
var foo = {
  devServer: {
    https: false,
    proxy: {}
  },
  configureWebpack: config => {
    if (config.optimization && config.optimization.minimizer)
      config.optimization.minimizer.forEach(minimizer => {
        if (
          minimizer.options &&
          minimizer.options.terserOptions &&
          minimizer.options.terserOptions.compress
        )
          minimizer.options.terserOptions.compress.drop_console = true;
      });
  },
  chainWebpack: config => {
    var v = config.plugin("copy").tap(args => {
      // console.log(process.cwd());

      args[0].push({
        from: `${process.cwd()}/api`,
        to: `${process.cwd()}/dist`
      });
      console.log(args);
      return args;
    });
    // console.log(Object.keys(v));
  },
  productionSourceMap: false,
  publicPath: process.env.VUE_APP_BASE_URL,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  parallel: undefined,
  css: undefined
};

foo.devServer.proxy[`${process.env.VUE_APP_BASE_URL}api`] = {
  target: process.env.VUE_APP_PROXY,
  secure: false,
  changeOrigin: true
};
module.exports = foo;
