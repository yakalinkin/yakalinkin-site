import webpackMerge from 'webpack-merge';

import { Paths, Config } from '@configs';

import webpackConfig from './common';

export default (paths: Paths, config: Config) => {
  const _webpackConfig = webpackConfig(paths, config);

  if (config.enabled.watcher) {
    _webpackConfig.devServer = {
      hot: true,
      compress: true,
      historyApiFallback: true,
      port: config.port,
      host: config.host,
    };
  }

  return webpackMerge(_webpackConfig, {
    devtool: config.enabled.watcher ? 'inline-source-map' : 'cheap-source-map',
  });
};
