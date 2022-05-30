import CopyWebpackPlugin, { Pattern, ObjectPattern } from 'copy-webpack-plugin';

import { isProd } from '../../configs';

import { PluginInstance } from './types';

export const copyPlugin: PluginInstance = function ({ config, paths }) {
  const patterns: Pattern[] = [

    // Images
    {
      from: `${paths.assets.images}/**/*`,
      to: `${paths.imagesFolder}/[name][ext]`,
      noErrorOnMissing: true,
      globOptions: {
        ignore: ['**/*.svg'],
      },
    },

  ];

  return new CopyWebpackPlugin({
    patterns: [
      {
        from: paths.root.assets,
        globOptions: {
          ignore: [
            '**/*.html',
            `${paths.assets.fonts}/**/*`,
            ...patterns.map((pattern: ObjectPattern) => pattern.from),
          ],
        },
      },
      ...patterns,
    ].filter(Boolean),
  });
};
