import { Rule } from './types';

export const typescriptRule: Rule = function ({ paths }) {
  return {
    test: /\.tsx?$/i,
    exclude: /node_modules/,
    include: paths.root.dev,
    use: [
      { loader: 'cache-loader' },
      { loader: 'babel-loader' },
      { loader: 'ts-loader', options: { transpileOnly: true } },
    ],
  };
};
