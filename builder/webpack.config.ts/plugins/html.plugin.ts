import HtmlWebpackPlugin from 'html-webpack-plugin';

import { PluginInstance } from './types';

export const htmlPlugin: PluginInstance = function ({ paths, config }) {
  return new HtmlWebpackPlugin({
    template: `../${paths.assetsFolder}/index.html`,
    minify: config.enabled.optimize,
  });
};
