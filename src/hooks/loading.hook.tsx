import { useEffect, useState } from 'react';

export function useLoading(func: () => Promise<void>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let loadingTimer: NodeJS.Timeout;

    func().then(() => {
      loadingTimer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });

    return () => clearTimeout(loadingTimer);
  }, [func]);

  return { isLoading };
}
