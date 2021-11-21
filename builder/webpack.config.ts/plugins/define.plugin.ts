import { DefinePlugin } from 'webpack';

import { PluginInstance } from './types';

export const definePlugin: PluginInstance = function ({ paths, config }) {
  config.env.NODE_ENV = config.mode;
  config.env.PUBLIC_URL = paths.publicUrl.slice(0, -1);

  return new DefinePlugin({
    'process.env': Object.keys(config.env).reduce((env, key) => {
      env[key] = JSON.stringify(config.env[key]);
      return env;
    }, {}),
  });
};
