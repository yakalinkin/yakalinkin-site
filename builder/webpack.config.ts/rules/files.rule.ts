import { Rule, Rules } from './types';

export const imagesRule: Rule = function ({ paths }) {
  return {
    test: /\.(png|jpe?g|gif|ico)$/i,
    exclude: /node_modules/,
    include: [paths.root.assets, paths.root.dev],
    type: 'asset/resource',
    generator: {
      filename: '[name][ext]',
      outputPath: `${paths.fontsFolder}/`,
      publicPath: `../${paths.fontsFolder}/`,
    },
  };
};

export const svgRule: Rule = function ({ paths }) {
  return {
    test: /\.(svg)$/i,
    exclude: /node_modules/,
    include: [paths.root.assets, paths.root.dev],
    issuer: { not: [/\.[jt]sx$/] },
    type: 'asset/resource',
    generator: {
      filename: '[name][ext]',
      outputPath: `${paths.fontsFolder}/`,
      publicPath: `../${paths.fontsFolder}/`,
    },
  };
};

export const fontsRule: Rule = function ({ paths }) {
  return {
    test: /\.(woff2?)$/i,
    exclude: /node_modules/,
    include: [paths.root.assets, paths.root.dev],
    type: 'asset/resource',
    generator: {
      filename: '[name][ext]',
      outputPath: `${paths.fontsFolder}/`,
      publicPath: `../${paths.fontsFolder}/`,
    },
  };
};

export const svgReactComponentRule: Rule = function ({ paths }) {
  return {
    test: /\.svg$/i,
    exclude: /node_modules/,
    include: [paths.root.assets, paths.root.dev],
    use: {
      loader: '@svgr/webpack',
      options: {
        svgoConfig: {
          plugins: [{
            name: 'cleanupIDs',
            active: false,
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
