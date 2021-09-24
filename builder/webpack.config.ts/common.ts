import { Configuration } from 'webpack';
import webpackMerge from 'webpack-merge';

import { Paths, Config } from '@configs';

import { filesRules, stylesRules, typescriptRule } from './rules';

import { tsconfigPathsToAlias } from '../utils';

import tsconfig from '../../tsconfig.json';

import {
  cleanPlugin,
  copyPlugin,
  definePlugin,
  interpolateHtmlPlugin,
  friendlyErrorsPlugin,
  htmlPlugin,
  miniCssExtractPlugin,
  faviconsPlugin,
} from './plugins';

export default (paths: Paths, config: Config) => {
  return webpackMerge<Configuration>({
    mode: config.mode,

    context: paths.root.dev,

    output: {
      publicPath: paths.publicUrl ?? '',
      path: paths.root.prod,
      filename: `${paths.scriptsFolder}/${config.assetsFilenames}.js`,
    },

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
      friendlyErrorsPlugin({ paths, config }),
      faviconsPlugin({ paths, config }),
    ],

    stats: 'errors-only',

    optimization: {

      // CommonsChunkPlugin
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

      // NoEmitOnErrorsPlugin
      emitOnErrors: true,

    },

    resolve: {
      alias: {
        'styles': paths.dev.styles,
        'images': paths.assets.images,
        'fonts': paths.assets.fonts,
        ...tsconfigPathsToAlias(paths.rootPath, tsconfig.compilerOptions.paths),
      },
    },

  }, config.webpack);
};
