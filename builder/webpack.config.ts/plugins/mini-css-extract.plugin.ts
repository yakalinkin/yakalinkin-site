import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { PluginInstance } from './types';

export const miniCssExtractPlugin: PluginInstance = function ({ paths, config }) {
  return new MiniCssExtractPlugin({
    filename: `${paths.stylesFolder}/${config.assetsFilenames}.css`,
  });
};
