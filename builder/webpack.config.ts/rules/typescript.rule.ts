import { Rule } from './types';

export const typescriptRule: Rule = function ({ paths }) {
  return {
    test: /\.tsx?$/i,
    exclude: /node_modules/,
    include: paths.root.dev,
    use: [
      { loader: 'cache-loader' },
      { loader: 'ts-loader' },
    ],
  };
};
