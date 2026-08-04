const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "KK",
    projectName: "react-micro",
    webpackConfigEnv,
    argv,
    outputSystemJS: false,
  });

  return merge(defaultConfig, {
    externals: [
      "react",
      "react-dom",
      "react-dom/client",
      "react/jsx-runtime",
      "scheduler",
    ],
  });
};