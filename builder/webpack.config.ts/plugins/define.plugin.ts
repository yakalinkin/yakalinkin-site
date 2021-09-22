import { DefinePlugin } from 'webpack';

import { PluginInstance } from './types';

export const definePlugin: PluginInstance = function ({ paths, config }) {
  return new DefinePlugin({
    'process.env': Object.keys(config.env).reduce((env, key) => {
      env[key] = JSON.stringify(config.env[key]);
      return env;
    }, {}),
    NODE_ENV: config.mode,
    PUBLIC_URL: paths.publicUrl,
  });
};
