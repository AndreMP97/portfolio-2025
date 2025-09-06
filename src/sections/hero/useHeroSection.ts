import { useInView } from "framer-motion";
import { useMemo, useRef } from "react";
import { useLoadingStore } from "stores/loadingStore";

export const useHeroSection = () => {
  const isLoading = useLoadingStore((store) => store.isLoading);

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.2, once: true });

  const visible = useMemo(() => !isLoading && inView, [inView, isLoading]);

  return { ref, visible };
};
