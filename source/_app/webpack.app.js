const webpack = require('webpack');
const { getIfUtils } = require('webpack-config-utils');
const ModernizrWebpackPlugin = require('modernizr-webpack-plugin');

module.exports = env => {
  const { ifProd, ifDev } = getIfUtils(env);

  const app = {
    //Custom webpack configuration goes here
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      }),
      new ModernizrWebpackPlugin()
    ]
  }
  return app;
}
