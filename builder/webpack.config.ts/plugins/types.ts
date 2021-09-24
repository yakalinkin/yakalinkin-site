import { WebpackPluginInstance } from 'webpack';

import { Config, Paths } from '@configs';

export type PluginInstance = (arg?: { paths?: Paths; config?: Config }) => WebpackPluginInstance
