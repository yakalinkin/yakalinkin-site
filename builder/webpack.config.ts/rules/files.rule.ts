import { Rule, Rules } from './types';

export const imagesRule: Rule = function ({ paths }) {
  return {
    test: /\.(png|jpe?g|gif)$/i,
    exclude: /node_modules/,
    include: [paths.root.assets, paths.root.dev],
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: paths.imagesFolder,
          publicPath: `../${paths.imagesFolder}`,
        },
      },
    ],
  };
};

export const fontsRule: Rule = function ({ paths }) {
  return {
    test: /\.(woff2?)$/i,
    exclude: /node_modules/,
    include: [paths.root.assets, paths.root.dev],
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: paths.fontsFolder,
          publicPath: `../${paths.fontsFolder}`,
        },
      },
    ],
  };
};

export const filesRules: Rules = function (configs) {
  return [
    imagesRule(configs),
    fontsRule(configs),
  ];
};
