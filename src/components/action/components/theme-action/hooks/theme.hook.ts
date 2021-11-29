import { useCallback } from 'react';

import { getHtmlDataset, setHtmlDataset } from '@utils/utils';

import { useLocalStorage } from '@hooks/local-storage.hook';

import { initThemeGenerator } from '../utils';

const themeGenerator = initThemeGenerator();

export function useTheme() {
  const [themeStorage, setThemeStorage] = useLocalStorage<string>('theme');

  const updateTheme = useCallback((nextTheme: string) => {
    const body = document.querySelector('body') as HTMLBodyElement;

    body.classList.add('disable-transitions');

    setThemeStorage(nextTheme);
    setHtmlDataset('theme', nextTheme);

    setTimeout(() => {
      body.classList.remove('disable-transitions');
    }, 100);
  }, [setThemeStorage]);

  const nextTheme = useCallback(() => {
    const theme = getHtmlDataset('theme');
    const nextTheme = themeGenerator.next(theme);

    updateTheme(nextTheme);
  }, [updateTheme]);

  return {
    currentTheme: themeStorage,
    nextTheme,
  };
}
