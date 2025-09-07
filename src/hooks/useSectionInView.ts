import { useInView } from "framer-motion";
import { useMemo, useRef, RefObject } from "react";
import { useLoadingStore } from "stores/loadingStore";

export type TUseSectionInView = {
  /**
   * How much of the element should be in view before triggering animation
   * @default 0.2
   */
  amount?: number;

  /**
   * Whether animation should only trigger once
   * @default true
   */
  once?: boolean;
};

/**
 * Generic hook to trigger Framer Motion animation on scroll.
 */
export const useSectionInView = <T extends HTMLElement = HTMLDivElement>({
  amount = 0.2,
  once = true,
}: TUseSectionInView = {}): {
  inView: boolean;
  motionProps: {
    animate: string;
    initial: string;
  };
  ref: RefObject<T | null>;
} => {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { amount, once });

  const canAnimate = useLoadingStore((store) => store.canAnimate);

  const motionProps = useMemo(
    () => ({
      animate: inView && canAnimate ? "visible" : "hidden",
      initial: "hidden",
    }),
    [canAnimate, inView],
  );

  return { inView, motionProps, ref };
};
