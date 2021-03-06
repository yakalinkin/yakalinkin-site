import path from 'path';
import merge from 'lodash/merge';

import { Paths } from './types';

import builderConfig from '../../builder.config';

const defaultPaths: Partial<Paths> = {
  rootPath: process.cwd(),
  publicUrl: '',
  devFolder: 'src',
  prodFolder: 'dist',
  assetsFolder: 'public',
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  stylesFolder: 'styles',
  scriptsFolder: 'scripts',
};

const paths = merge(defaultPaths, builderConfig.paths) as Paths;

paths.root = {
  dev: path.join(paths.rootPath, paths.devFolder),
  prod: path.join(paths.rootPath, paths.prodFolder),
  assets: path.join(paths.rootPath, paths.assetsFolder),
};

paths.assets = {
  images: path.join(paths.root.assets, paths.imagesFolder),
  fonts: path.join(paths.root.assets, paths.fontsFolder),
};

paths.dev = {
  styles: path.join(paths.root.dev, paths.stylesFolder),
};

export { paths };
