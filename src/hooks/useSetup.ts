import { useEffect } from "react";
import { useLoadingStore } from "stores/loadingStore";

const LOADING_TIMER = 1500;

export const useSetup = () => {
  useEffect(() => {
    const { setIsLoading } = useLoadingStore.getState();

    const timer = setTimeout(() => setIsLoading(false), LOADING_TIMER);
    return () => clearTimeout(timer);
  }, []);
};
