import { useEffect } from "react";
import { useLoadingStore } from "stores/loadingStore";

export const useSetup = () => {
  useEffect(() => {
    const { setIsLoading } = useLoadingStore.getState();

    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
};
