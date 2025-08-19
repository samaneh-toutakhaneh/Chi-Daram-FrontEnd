import { useState, useEffect, useCallback } from 'react';
import { LoadingState } from '../types';

interface UseFetchOptions {
  immediate?: boolean;
}

interface UseFetchReturn<T> extends LoadingState {
  data: T | null;
  execute: (...args: any[]) => Promise<T | null>;
  reset: () => void;
}

export function useFetch<T>(
  fetchFunction: (...args: any[]) => Promise<T>,
  options: UseFetchOptions = {}
): UseFetchReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(async (...args: any[]): Promise<T | null> => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await fetchFunction(...args);
      setData(result);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'خطایی رخ داده است';
      setError(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [fetchFunction]);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (options.immediate) {
      execute();
    }
  }, [execute, options.immediate]);

  return {
    data,
    isLoading,
    error,
    execute,
    reset,
  };
}

// Specialized hook for OTP operations
export function useOtpApi() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);
  const [canResend, setCanResend] = useState(true);

  const startTimer = useCallback((seconds: number = 120) => {
    setTimeLeft(seconds);
    setCanResend(false);
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = useCallback((seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }, []);

  return {
    phoneNumber,
    setPhoneNumber,
    timeLeft,
    canResend,
    startTimer,
    formatTime,
  };
}
