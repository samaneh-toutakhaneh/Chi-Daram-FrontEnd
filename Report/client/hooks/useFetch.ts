import { useState, useEffect } from 'react';
import { LoadingState } from '@/types';

interface UseFetchOptions {
  immediate?: boolean;
  dependencies?: any[];
}

interface UseFetchReturn<T> extends LoadingState {
  data: T | null;
  refetch: () => Promise<void>;
}

export function useFetch<T>(
  fetchFn: () => Promise<T>,
  options: UseFetchOptions = {}
): UseFetchReturn<T> {
  const { immediate = true, dependencies = [] } = options;
  
  const [state, setState] = useState<{
    data: T | null;
    isLoading: boolean;
    error: string | null;
  }>({
    data: null,
    isLoading: immediate,
    error: null,
  });

  const fetchData = async () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const result = await fetchFn();
      setState({
        data: result,
        isLoading: false,
        error: null,
      });
    } catch (err) {
      setState({
        data: null,
        isLoading: false,
        error: err instanceof Error ? err.message : 'An error occurred',
      });
    }
  };

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [immediate, ...dependencies]);

  return {
    ...state,
    refetch: fetchData,
  };
}

// Specialized hooks
export function useReports() {
  const { api } = await import('@/services/api');
  return useFetch(() => api.getReports());
}

export function useDashboardStats() {
  const { api } = await import('@/services/api');
  return useFetch(() => api.getDashboardStats());
}

export function useCurrentUser() {
  const { api } = await import('@/services/api');
  return useFetch(() => api.getCurrentUser());
}
