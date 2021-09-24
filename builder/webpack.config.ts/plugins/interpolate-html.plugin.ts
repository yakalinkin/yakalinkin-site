import InterpolateHtmlPlugin from 'interpolate-html-plugin';

import { PluginInstance } from './types';

export const interpolateHtmlPlugin: PluginInstance = function ({ paths, config }) {
  return new InterpolateHtmlPlugin({
    ...config.env,
    PUBLIC_URL: paths.publicUrl.slice(0, -1),
  });
};
