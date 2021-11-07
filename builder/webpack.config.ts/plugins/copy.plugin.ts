import CopyWebpackPlugin from 'copy-webpack-plugin';

import { isProd } from '../../configs';

import { PluginInstance } from './types';

export const copyPlugin: PluginInstance = function ({ config, paths }) {
  return new CopyWebpackPlugin({
    patterns: [

      // Fonts
      {
        from: `${paths.assets.fonts}/**/*`,
        to: `${paths.fontsFolder}/[name][ext]`,
        noErrorOnMissing: true,
      },

      // Images
      {
        from: `${paths.assets.images}/**/*`,
        to: `${paths.imagesFolder}/[name][ext]`,
        noErrorOnMissing: true,
        globOptions: {
          ignore: ['**/*.svg'],
        },
      },

      // Favicons
      {
        from: `${paths.assets.favicons}/**/*`,
        to: `${paths.faviconsFolder}/[name][ext]`,
        noErrorOnMissing: true,
      },

      // CNAME
      isProd && `${paths.root.assets}/CNAME`,

    ].filter(Boolean),
  });
};
