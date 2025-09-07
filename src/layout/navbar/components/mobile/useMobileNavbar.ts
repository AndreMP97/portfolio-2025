import { useEffect, useMemo } from "react";

export const useMobileNavbar = (isOpen: boolean) => {
  const motionProps = useMemo(
    () => ({
      animate: "visible",
      exit: "exit",
      initial: "hidden",
    }),
    [],
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return { motionProps };
};
