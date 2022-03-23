import webpackMerge from 'webpack-merge';

import { Paths, Config, WebpackConfiguration } from '@configs';

import { filesRules, stylesRules, typescriptRule } from './rules';

import { tsconfigPathsToAlias } from '../utils';

import tsconfig from '../../tsconfig.json';

import {
  cleanPlugin,
  copyPlugin,
  definePlugin,
  interpolateHtmlPlugin,
  htmlPlugin,
  miniCssExtractPlugin,
  forkTsCheckerPlugin,
} from './plugins';

export default (paths: Paths, config: Config) => {
  return webpackMerge<WebpackConfiguration>({
    mode: config.mode,

    context: paths.root.dev,

    output: {
      publicPath: paths.publicUrl ?? '',
      path: paths.root.prod,
      filename: `${paths.scriptsFolder}/${config.assetsFilenames}.js`,
      clean: true,
      pathinfo: false,
    },

    cache: true,

    module: {
      rules: [
        typescriptRule({ paths, config }),
        ...stylesRules({ paths, config }),
        ...filesRules({ paths, config }),
      ],
    },

    plugins: [
      definePlugin({ paths, config }),
      interpolateHtmlPlugin({ paths, config }),
      cleanPlugin({ paths, config }),
      copyPlugin({ paths, config }),
      miniCssExtractPlugin({ paths, config }),
      htmlPlugin({ paths, config }),
      forkTsCheckerPlugin({ paths, config }),
    ],

    stats: 'minimal',

    optimization: {
      moduleIds: 'named',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            name: 'vendor',
            chunks: 'initial',
            priority: 10,
            enforce: true,
          },
        },
      },
      emitOnErrors: true,
    },

    resolve: {
      alias: {
        'styles': paths.dev.styles,
        'images': paths.assets.images,
        'fonts': paths.assets.fonts,
        ...tsconfigPathsToAlias(paths.rootPath, tsconfig.compilerOptions.paths),
      },
      symlinks: false,
      cacheWithContext: false,
    },

  }, config.webpack);
};
