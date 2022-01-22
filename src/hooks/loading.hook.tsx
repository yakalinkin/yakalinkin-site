import { useEffect, useState } from 'react';

export function useLoading(callback: () => Promise<void>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let loadingTimer: NodeJS.Timeout;

    callback().then(() => {
      loadingTimer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });

    return () => clearTimeout(loadingTimer);
  }, [callback]);

  return { isLoading };
}
