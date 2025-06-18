
import { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ErrorState {
  error: Error | null;
  isLoading: boolean;
  retryCount: number;
}

interface UseErrorHandlerOptions {
  maxRetries?: number;
  retryDelay?: number;
  showToast?: boolean;
  onError?: (error: Error) => void;
}

export const useErrorHandler = (options: UseErrorHandlerOptions = {}) => {
  const {
    maxRetries = 3,
    retryDelay = 1000,
    showToast = true,
    onError
  } = options;
  
  const { toast } = useToast();
  const [errorState, setErrorState] = useState<ErrorState>({
    error: null,
    isLoading: false,
    retryCount: 0
  });

  const handleError = useCallback((error: Error) => {
    console.error('Error caught by useErrorHandler:', error);
    
    setErrorState(prev => ({
      ...prev,
      error,
      isLoading: false
    }));

    if (showToast) {
      toast({
        title: "Something went wrong",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
    }

    onError?.(error);
  }, [toast, showToast, onError]);

  const executeWithErrorHandling = useCallback(async <T>(
    asyncFunction: () => Promise<T>,
    context?: string
  ): Promise<T | null> => {
    setErrorState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const result = await asyncFunction();
      setErrorState(prev => ({ ...prev, isLoading: false, retryCount: 0 }));
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error : new Error('Unknown error occurred');
      
      if (context) {
        errorMessage.message = `${context}: ${errorMessage.message}`;
      }
      
      handleError(errorMessage);
      return null;
    }
  }, [handleError]);

  const retry = useCallback(async <T>(
    asyncFunction: () => Promise<T>,
    context?: string
  ): Promise<T | null> => {
    if (errorState.retryCount >= maxRetries) {
      toast({
        title: "Maximum retries reached",
        description: "Please try again later or contact support",
        variant: "destructive",
      });
      return null;
    }

    setErrorState(prev => ({ ...prev, retryCount: prev.retryCount + 1 }));
    
    // Add delay for retry
    await new Promise(resolve => setTimeout(resolve, retryDelay * errorState.retryCount));
    
    return executeWithErrorHandling(asyncFunction, context);
  }, [errorState.retryCount, maxRetries, retryDelay, executeWithErrorHandling, toast]);

  const clearError = useCallback(() => {
    setErrorState({
      error: null,
      isLoading: false,
      retryCount: 0
    });
  }, []);

  return {
    error: errorState.error,
    isLoading: errorState.isLoading,
    retryCount: errorState.retryCount,
    canRetry: errorState.retryCount < maxRetries,
    executeWithErrorHandling,
    retry,
    clearError,
    handleError
  };
};
