import React, { FC, useEffect, useState } from 'react';

import globalStyleJson from '@styles/main.scss.json';

import { BasicAction } from '../basic-action';

import { DarkMode } from './components/dark-mode';

import style from './style.module.scss';

function getThemeGenerator() {
  const colors = Object.keys(globalStyleJson.colors).filter((color) => color !== DOM.html.getTheme());
  return colors[Symbol.iterator]();
}

function getThemes() {
  let themeGenerator:IterableIterator<string>;

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

const DOM = {
  html: {
    getTheme: () => (document.querySelector('html') as HTMLHtmlElement).dataset.theme as string,
    setTheme: (value) => (document.querySelector('html') as HTMLHtmlElement).dataset.theme = value,
  },
};

const themes = getThemes();

export const ThemeAction: FC = () => {
  const [currentTheme, setCurrentTheme] = useState<IteratorResult<string | null>>({ value: DOM.html.getTheme(), done: false });
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
    setCurrentTheme(themes.next());
  };

  useEffect(() => {
    if (currentTheme.value && currentTheme.value !== DOM.html.getTheme()) {
      DOM.html.setTheme(currentTheme.value);
    }
  }, [currentTheme.value]);

  useEffect(() => {
    if(currentTheme.done) {
      themes.update();
      setCurrentTheme(themes.next());
    }
  }, [currentTheme.done]);

  return (
    <BasicAction onClick={handleClick}>
      <DarkMode
        className={style.themeAction}
        isDarkMode={currentTheme.value !== 'light'}
      />
    </BasicAction>
  );
};
