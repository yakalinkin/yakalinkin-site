import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import chalk from 'chalk';

// :FIX: Cannot find modules: @configs
import { isProd } from '../../configs';

import { PluginInstance } from './types';

export const friendlyErrorsRoot = {
  devServer: {
    quiet: true,
  },
};

export const friendlyErrorsPlugin: PluginInstance = function ({ config }) {
  const messages: string[] = [];

  if (!isProd && config.enabled.watcher) {
    let localAddress = '';
    let networkAddress = '';

    if (config.host === '::') {
      localAddress = `http://localhost:${config.port}`;
      networkAddress = `http://${config.ip}:${config.port}`;
    } else {
      localAddress = `http://${config.host}:${config.port}`;
    }

    localAddress && messages.push(`${chalk.bold('Local:')} ${localAddress}`);
    networkAddress && messages.push(`${chalk.bold('Network:')} ${networkAddress}`);
  }

  return new FriendlyErrorsWebpackPlugin({
    compilationSuccessInfo: { messages },
  });
};
