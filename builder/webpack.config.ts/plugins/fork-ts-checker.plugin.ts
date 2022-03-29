import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

import { PluginInstance } from './types';

export const forkTsCheckerPlugin: PluginInstance = function ({ paths, config }) {
  return new ForkTsCheckerWebpackPlugin({
    typescript: {
      configFile: paths.rootPath + '/tsconfig.json',
    },
  });
};
