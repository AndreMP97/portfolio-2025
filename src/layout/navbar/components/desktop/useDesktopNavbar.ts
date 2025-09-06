import { useMemo } from "react";

export const useDesktopNavbar = (visible: boolean) => {
  const motionProps = useMemo(
    () => ({
      animate: visible ? "visible" : "hidden",
      initial: "hidden",
    }),
    [visible],
  );

  return { motionProps };
};
