import CopyWebpackPlugin from 'copy-webpack-plugin';

import { PluginInstance } from './types';

export const copyPlugin: PluginInstance = function ({ paths }) {
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

    ],
  });
};
