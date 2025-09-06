// React
import { useMemo } from "react";

// Hooks
import { useSectionInView } from "hooks/useSectionInView";

// Zustand Store
import { useLoadingStore } from "stores/loadingStore";

export const useHeroSection = () => {
  const { ref, inView } = useSectionInView();

  const canAnimate = useLoadingStore((store) => store.canAnimate);

  const visible = useMemo(() => canAnimate && inView, [inView, canAnimate]);

  return { ref, visible };
};
