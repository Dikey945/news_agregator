import { useCallback, useEffect, useState } from "react";

export interface State<T> {
  loading: boolean;
  error: Error | null;
  value: T | null;
  execute: (...params: any[]) => void;
}

interface Options {
  initialLoading?: boolean;
  dependencies?: any[];
}

export function useAsync<T>(func: (...params: any[]) => Promise<T>, options?: Options): State<T> {
  const { execute, ...state } = useAsyncInternal(func, options);

  useEffect(() => {
    execute();
  }, [execute]);

  return { execute, ...state};
}

const useAsyncInternal = <T>(func: (...params: any[]) => Promise<T>, options?: Options): State<T> => {
  const { initialLoading = false, dependencies = [] } = options || {};
  const [loading, setLoading] = useState(initialLoading);
  const [value, setValue] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback((...params: any) => {
    setLoading(true);
    return func(...params)
      .then((data) => {
        setValue(data);
        setError(null);
        return data;
      })
      .catch((error) => {
        setError(error);
        setValue(null);
        return Promise.reject(error);
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return { loading, error, value, execute };
}
