import { Configs } from './builder/configs';

const builderConfig: Configs = {
  paths: {
    publicUrl: '/',
  },
  config: {
    env: {
      SITE_TITLE: 'yakalinkin',
    },
    webpack: {
      entry: {
        app: [
          './index.tsx',
          './styles/main.scss',
        ],
      },
      resolve: {
        extensions: [
          '.tsx',
          '.ts',
          '.js',
          '.scss',
        ],
        alias: {
          // React-Hot-Loader: react-🔥-dom patch is not detected. React 16.6+ features may not work.
          // https://github.com/gaearon/react-hot-loader/issues/1227
          'react-dom': '@hot-loader/react-dom',
        },
      },
    },
  },
};

export default builderConfig as any;
