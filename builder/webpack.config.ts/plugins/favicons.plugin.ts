import FaviconsWebpackPlugin from 'favicons-webpack-plugin';

import { PluginInstance } from './types';

export const faviconsPlugin: PluginInstance = function ({ paths }) {
  return new FaviconsWebpackPlugin({
    logo: `../${paths.assetsFolder}/favicon.png`,
    mode: 'webapp',
    prefix: 'favicons/',
    cache: false,
    inject: true,
    favicons: {
      icons: {
        favicons: true,

        android: false,
        appleIcon: false,
        appleStartup: false,
        firefox: false,
        windows: false,
        yandex: false,
        coast: false,
      },
    },
  });
};
