import { useEffect, useState, useCallback } from 'react';

import { setHtmlDataset } from '@utils/utils';

import { useLocalStorage } from '@hooks/local-storage.hook';

import { initThemeGenerator } from '../utils';

const themeGenerator = initThemeGenerator();

export function useTheme() {
  const [themeStorage, setThemeStorage] = useLocalStorage<string>('theme');
  const [iteratorTheme, setIteratorTheme] = useState<IteratorResult<string | undefined>>({ value: themeStorage, done: false });
  const [currentTheme, setCurrentTheme] = useState(themeStorage);
  const body = document.querySelector('body') as HTMLBodyElement;

  const nextTheme = useCallback(() => {
    setIteratorTheme(themeGenerator.next());
  }, []);

  useEffect(() => {
    if (iteratorTheme.value && iteratorTheme.value !== themeStorage) {
      setCurrentTheme(iteratorTheme.value);
    }
  }, [themeStorage, iteratorTheme.value]);

  useEffect(() => {
    if(iteratorTheme.done) {
      themeGenerator.update();
      setIteratorTheme(themeGenerator.next());
    }
  }, [iteratorTheme.done]);

  useEffect(() => {
    if (currentTheme) {
      body.classList.add('disable-transitions');

      setThemeStorage(currentTheme);
      setHtmlDataset('theme', currentTheme);

      setTimeout(() => {
        body.classList.remove('disable-transitions');
      }, 100);
    }
  }, [currentTheme, setThemeStorage, body]);

  return {
    currentTheme,
    nextTheme,
  };
}
