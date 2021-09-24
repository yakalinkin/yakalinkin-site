import globalStyleJson from '@styles/main.scss.json';
import { getHtmlDataset } from '@utils/utils';

export function getThemeGenerator() {
  const colors = Object.keys(globalStyleJson.colors).filter((color) => color !== getHtmlDataset('theme'));
  return colors[Symbol.iterator]();
}

export function initThemeGenerator() {
  let themeGenerator: IterableIterator<string>;

  return {
    next() {
      if (!themeGenerator) this.update();
      return themeGenerator.next();
    },
    update() {
      themeGenerator = getThemeGenerator();
    },
  };
}
