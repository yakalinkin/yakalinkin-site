import webpackMerge from 'webpack-merge';

import { Paths, Config } from '@configs';

import webpackConfig from './common';
import { friendlyErrorsRoot } from './plugins';

export default (paths: Paths, config: Config) => {
  const _webpackConfig = webpackConfig(paths, config);

  if (config.enabled.watcher) {
    _webpackConfig.devServer = {
      publicPath: _webpackConfig.output?.publicPath as string,
      hot: true,
      compress: true,
      inline: true,
      historyApiFallback: true,
      stats: _webpackConfig?.stats,
      port: config.port,
      host: config.host,
      ...friendlyErrorsRoot.devServer,
    };
  }

  return webpackMerge(_webpackConfig, {
    devtool: config.enabled.watcher ? 'inline-source-map' : 'cheap-source-map',
  });
};
