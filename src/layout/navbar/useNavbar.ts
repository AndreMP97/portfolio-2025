import { useMemo, useState } from "react";
import { useLoadingStore } from "stores/loadingStore";

export const useNavbar = () => {
  const isLoading = useLoadingStore((store) => store.isLoading);
  const visible = !isLoading;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const motionProps = useMemo(
    () => ({
      animate: visible ? "visible" : "hidden",
      initial: "hidden",
    }),
    [visible],
  );

  return {
    closeMobileMenu,
    isMobileMenuOpen,
    motionProps,
    toggleMobileMenu,
    visible,
  };
};
