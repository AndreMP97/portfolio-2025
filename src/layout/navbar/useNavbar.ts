import { useMemo, useState } from "react";
import { useLoadingStore } from "stores/loadingStore";

export const useNavbar = () => {
  const canAnimate = useLoadingStore((store) => store.canAnimate);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const motionProps = useMemo(
    () => ({
      animate: canAnimate ? "visible" : "hidden",
      initial: "hidden",
    }),
    [canAnimate],
  );

  return {
    closeMobileMenu,
    isMobileMenuOpen,
    motionProps,
    toggleMobileMenu,
  };
};
