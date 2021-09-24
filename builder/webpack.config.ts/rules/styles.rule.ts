import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import jsonImporter from 'node-sass-json-importer';
import globImporter from 'node-sass-glob-importer';

import { Rule, Rules, UseItems } from './types';

const cssnanoConfig = {
  preset: ['default', { discardComments: { removeAll: true } }],
};

export const scssRule: Rule = function ({ paths, config }) {
  return {
    test: /\.scss$/i,
    exclude: [/node_modules/, /\.module.scss$/i],
    include: paths.root.dev,
    use: getUseItems({ config }),
  };
};

export const scssModuleRule: Rule = function ({ paths, config }) {
  return {
    test: /\.module.scss$/i,
    exclude: /node_modules/,
    include: paths.root.dev,
    use: getUseItems({
      config,
      options: {
        modules: {
          exportLocalsConvention: 'camelCaseOnly',
          localIdentName: '[local]_[contenthash:base64:5]',
        },
      },
    }),
  };
};

export const stylesRules: Rules = function (configs) {
  return [
    scssRule(configs),
    scssModuleRule(configs),
  ];
};

export const getUseItems: UseItems = function ({ config, options = {} }) {
  return [
    { loader: MiniCssExtractPlugin.loader },
    { loader: 'cache-loader' },
    {
      loader: 'css-loader',
      options: {
        ...options,
        sourceMap: config.enabled.sourceMaps,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          parser: config.enabled.optimize ? 'postcss-safe-parser' : undefined,
          plugins: {
            'cssnano': config.enabled.optimize ? cssnanoConfig : false,
            'autoprefixer': true,
          },
        },
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sassOptions: { importer: [jsonImporter(), globImporter()] },
      },
    },
  ];
};
