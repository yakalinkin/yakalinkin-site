import { useState } from 'react';

export function useIgnoreTabIndex(init = false): [number, (ignore: boolean) => void] {
  const [tabIndex, setTabIndex] = useState(init ? -1 : 0);

  function ignoreTabIndex(ignore: boolean) {
    setTabIndex(ignore ? -1 : 0);
  }

  return [ tabIndex, ignoreTabIndex ];
}
