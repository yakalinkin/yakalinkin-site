import { Rule, Rules } from './types';

export const imagesRule: Rule = function ({ paths }) {
  return {
    test: /\.(png|jpe?g|gif|ico)$/i,
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

export const svgRule: Rule = function ({ paths }) {
  return {
    test: /\.(svg)$/i,
    exclude: /node_modules/,
    include: [paths.root.assets, paths.root.dev],
    issuer: { not: [/\.[jt]sx$/] },
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

export const svgReactComponentRule: Rule = function ({ paths }) {
  return {
    test: /\.(svg?)$/i,
    exclude: /node_modules/,
    include: [paths.root.assets, paths.root.dev],
    use: {
      loader: '@svgr/webpack',
      options: {
        svgoConfig: {
          plugins: [{
            cleanupIDs: false,
          }],
        },
      },
    },
  };
};

export const filesRules: Rules = function (configs) {
  return [
    imagesRule(configs),
    fontsRule(configs),
    svgReactComponentRule(configs),
    svgRule(configs),
  ];
};
