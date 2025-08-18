import { useState, useEffect, useCallback } from 'react';
import { ApiResponse } from '../types';

interface UseFetchOptions {
  immediate?: boolean;
}

interface UseFetchReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  execute: () => Promise<void>;
  refetch: () => Promise<void>;
}

export function useFetch<T>(
  apiCall: () => Promise<ApiResponse<T>>,
  options: UseFetchOptions = {}
): UseFetchReturn<T> {
  const { immediate = true } = options;
  
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(immediate);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await apiCall();
      
      if (response.success) {
        setData(response.data);
      } else {
        setError(response.message || 'درخواست با خطا مواجه شد');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'خطای غیرمنتظره‌ای رخ داد');
    } finally {
      setLoading(false);
    }
  }, [apiCall]);

  const refetch = useCallback(() => {
    return execute();
  }, [execute]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return {
    data,
    loading,
    error,
    execute,
    refetch,
  };
}

// Hook for mutations (POST, PUT, DELETE)
export function useMutation<T, P = any>(
  apiCall: (params: P) => Promise<ApiResponse<T>>
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutate = useCallback(async (params: P): Promise<T | null> => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await apiCall(params);
      
      if (response.success) {
        return response.data;
      } else {
        setError(response.message || 'عملیات با خطا مواجه شد');
        return null;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'خطای غیرمنتظره‌ای رخ داد');
      return null;
    } finally {
      setLoading(false);
    }
  }, [apiCall]);

  return {
    mutate,
    loading,
    error,
  };
}
