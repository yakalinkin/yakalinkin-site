import * as yargs from 'yargs';
import { merge } from 'lodash';

import { Config, YargsOptions } from './types';

// :FIX: Cannot find modules: @utils
import { networkAddress } from '../utils';

import builderConfig from '../../builder.config';

const argv = yargs.options({
  mode: { type: 'string' },
}).argv as YargsOptions;

export const isProd = argv.mode === 'production';

const defaultConfig: Config = {
  mode: isProd ? 'production' : 'development',
  port: Number(process.env.PORT) || (isProd ? 5000 : 4000),
  host: process.env.HOST || '::',
  ip: process.env.IP || networkAddress(),
  assetsFilenames: '[name]_[hash]',
  target: process.env.npm_lifecycle_event,
  webpack: {},
  enabled: {},
};

defaultConfig.enabled = {
  cacheBusting: isProd,
  sourceMaps: !isProd,
  optimize: isProd,
  watcher: defaultConfig.target === 'start',
};

if (!defaultConfig.enabled.cacheBusting) {
  defaultConfig.assetsFilenames = '[name]';
}

export const config = merge(defaultConfig, builderConfig.config);
