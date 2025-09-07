import { useMemo } from "react";
import { useLoadingStore } from "stores/loadingStore";

export const useDesktopNavbar = () => {
  const canAnimate = useLoadingStore((store) => store.canAnimate);

  const motionProps = useMemo(
    () => ({
      animate: canAnimate ? "visible" : "hidden",
      initial: "hidden",
    }),
    [canAnimate],
  );

  return { motionProps };
};
