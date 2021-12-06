import { Configs } from './builder/configs';

const builderConfig: Configs = {
  paths: {
    publicUrl: '/',
  },
  config: {
    env: {
      SITE_TITLE: 'Ярослав Калинкин',
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
          'react-dom': '@hot-loader/react-dom',
        },
      },
    },
  },
};

export default builderConfig;