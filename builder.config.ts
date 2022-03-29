import { Configs } from './builder/configs';

const builderConfig: Configs = {
  paths: {
    publicUrl: '/',
  },
  config: {
    env: {
      SITE_TITLE: 'yakalinkin',
      GOOGLE_FONTS_URL: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
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

export default builderConfig;
