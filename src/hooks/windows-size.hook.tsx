import { useEffect, useState } from 'react';

import { isBrowser, off, on } from '@utils/utils';

export const useWindowSize = (initialWidth = Infinity, initialHeight = Infinity) => {
  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({
    width: isBrowser ? window.innerWidth : initialWidth,
    height: isBrowser ? window.innerHeight : initialHeight,
  });

  useEffect(() => {
    if (isBrowser) {
      const handler = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      on(window, 'resize', handler);

      return () => {
        off(window, 'resize', handler);
      };
    }
  }, []);

  return windowSize;
};
