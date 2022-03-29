import webpackMerge from 'webpack-merge';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

import { Paths, Config } from '@configs';

import webpackConfig from './common';
import { forkTsCheckerPlugin } from './plugins';

export default (paths: Paths, config: Config) => {
  const _webpackConfig = webpackConfig(paths, config);

  return webpackMerge(_webpackConfig, {
    devtool: undefined,

    optimization: {
      minimizer: [
        new TerserPlugin(),
        new CssMinimizerPlugin(),
      ],
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      nodeEnv: 'production',
      concatenateModules: true,
    },

    plugins: [
      forkTsCheckerPlugin({ paths, config }),
    ],
  });
};
