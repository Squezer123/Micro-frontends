const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: false,
  configureWebpack: {
    target: "web",
    output: {
      filename: "KK-vue-mfe.js",
      library: {
        type: "module",
      },
      environment: {
        module: true,
        dynamicImport: true,
      },
    },
    experiments: {
      outputModule: true,
    },
    externals: {
      vue: "vue",
    },
    externalsType: "module",
  },
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
    config.entryPoints.delete("app");
    config.entry("app").add("./src/main.js");
  },
  devServer: {
    port: 8081,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    client: false,
    hot: false,
    liveReload: false,
  },
});