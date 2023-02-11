import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  const [response, setResposne] = useState(null);

  useEffect(() => {
    let shouldCancel = false;

    fetchData();

    async function fetchData() {
      setIsLoading(true);

      try {
        const res = await fetch(url);
        const data = await res.json();

        if (shouldCancel) return;

        setResposne(data);
        setError(null);
      } catch (err) {
        if (shouldCancel) return;

        setError(err);
        setResposne(null);
      }

      setIsLoading(false);
    }

    return () => {
      shouldCancel = true;
    };
  }, [url]);

  return [response, isLoading, error] as const;
};
