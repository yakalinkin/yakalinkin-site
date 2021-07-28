import { DefinePlugin } from 'webpack';

import { PluginInstance } from './types';

export const definePlugin: PluginInstance = function ({ paths, config }) {
  return new DefinePlugin({
    NODE_ENV: config.mode,
    PUBLIC_URL: paths.publicUrl,
  });
};
