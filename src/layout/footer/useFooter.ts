import { useMemo, useRef } from "react";
import { useInView } from "framer-motion";

export const useFooter = () => {
  const currentYear = new Date().getFullYear();

  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.2, once: true });

  const motionProps = useMemo(
    () => ({
      animate: inView ? "visible" : "hidden",
      initial: "hidden",
    }),
    [inView],
  );

  return { currentYear, motionProps, ref };
};
