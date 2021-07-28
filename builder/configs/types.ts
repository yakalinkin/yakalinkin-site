import { Configuration } from 'webpack';

export type Paths = {
  rootPath: string;
  publicUrl: string;
  devFolder: string;
  prodFolder: string;
  assetsFolder: string;
  imagesFolder: string;
  fontsFolder: string;
  stylesFolder: string;
  scriptsFolder: string;
  root: {
    dev: string;
    prod: string;
    assets: string;
  };
  assets: {
    images: string;
    fonts: string;
  };
  dev: {
    styles: string;
  };
}

export type Config = {
  readonly ip?: string;
  mode: 'development' | 'production';
  port?: number;
  host?: string;
  assetsFilenames?: string;
  manifest?: Record<string, string>;
  target?: string;
  webpack: Pick<Configuration, 'entry' | 'resolve'>;
  enabled: {
    cacheBusting?: boolean;
    sourceMaps?: boolean;
    watcher?: boolean;
    optimize?: boolean;
  };
}

export type Configs = {
  paths?: Partial<Paths>;
  config: Partial<Config>;
}
