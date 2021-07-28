import { paths, config } from '../configs';

export default () => {
  return require(`./${config.mode}`).default(paths, config);
};
