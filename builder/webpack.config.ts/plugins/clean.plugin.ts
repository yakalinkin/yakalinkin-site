import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import { PluginInstance } from './types';

export const cleanPlugin: PluginInstance = function ({ paths }) {
  return new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: [paths.root.prod],
  });
};
