import { useCallback, useLayoutEffect, useRef, useState } from 'react';

import { isBrowser, noop } from '@utils/utils';

export function useLocalStorage<T>(key: string, initValue?: T): [T | undefined, (value: T | undefined) => void, () => void] {
  if (!isBrowser) return [initValue, noop, noop];
  if (!key) throw new Error('The "key" value cannot be falsy in useLocalStorage');

  const initializer = useRef((key: string) => {
    const localStorageValue = localStorage.getItem(key);

    if (localStorageValue !== null) {
      return JSON.parse(localStorageValue);
    } else {
      initValue && localStorage.setItem(key, JSON.stringify(initValue));
    }

    return initValue;
  });

  const [storedState, setStoredState] = useState<T | undefined>(() => initializer.current(key));

  useLayoutEffect(() => setStoredState(initializer.current(key)), [key]);

  const setState = useCallback((value: T | undefined) => {
    const newState = typeof value === 'function' ? value(storedState) : value;

    if (typeof newState === 'undefined') return;

    const valueToStore = JSON.stringify(newState);

    localStorage.setItem(key, valueToStore);

    setStoredState(JSON.parse(valueToStore));
  }, [key, storedState]);

  const removeState = useCallback(() => {
    localStorage.removeItem(key);
    setStoredState(undefined);
  }, [key]);

  return [storedState, setState, removeState];
}
