import globalStyleJson from '@styles/main.scss.json';

export function getThemes() {
  return Object.keys(globalStyleJson.colors);
}

export function initThemeGenerator() {
  let themes = getThemes();

  return {
    next(curr: string) {
      const index = themes.indexOf(curr);

      const spliced = themes.splice(0, index + 1);

      themes = [...themes, ...spliced];

      return themes[0];
    },
    reset() {
      themes = getThemes();
    },
  };
}
