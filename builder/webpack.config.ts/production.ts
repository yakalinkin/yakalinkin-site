import webpackMerge from 'webpack-merge';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

import { Paths, Config } from '@configs';

import webpackConfig from './common';

export default (paths: Paths, config: Config) => {
  const _webpackConfig = webpackConfig(paths, config);

  return webpackMerge(_webpackConfig, {
    devtool: undefined,

    optimization: {
      minimizer: [
        new TerserPlugin(),
        new OptimizeCSSAssetsPlugin(),
      ],
      nodeEnv: 'production',
      concatenateModules: true,
    },
  });
};
