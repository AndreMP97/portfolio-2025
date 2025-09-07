// React
import { useEffect, useMemo } from "react";

// Zustand Store
import { useLoadingStore } from "stores/loadingStore";

// Timer
const LOADING_TIMER = 1500;

export const useSetup = () => {
  const mountKey = useMemo(() => Date.now(), []);

  useEffect(() => {
    const { setIsLoading } = useLoadingStore.getState();

    const timer = setTimeout(() => setIsLoading(false), LOADING_TIMER);
    return () => clearTimeout(timer);
  }, []);

  return { mountKey };
};
