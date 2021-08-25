import { Configuration } from 'webpack';
import webpackMerge from 'webpack-merge';
import { join } from 'path';

import { filesRules, stylesRules, typescriptRule } from './rules';

import { Paths, Config, isProd } from '@configs';

import {
  cleanPlugin,
  copyPlugin,
  definePlugin,
  friendlyErrorsPlugin,
  htmlPlugin,
  miniCssExtractPlugin,
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
      cleanPlugin({ paths, config }),
      copyPlugin({ paths, config }),
      miniCssExtractPlugin({ paths, config }),
      htmlPlugin({ paths, config }),
      friendlyErrorsPlugin({ paths, config }),
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
        '@components': join(paths.root.dev, 'components'),
        '@styles': join(paths.root.dev, 'styles'),
        '@hooks': join(paths.root.dev, 'hooks'),
        '@utils': join(paths.root.dev, 'utils'),
      },
    },

  }, config.webpack);
};
