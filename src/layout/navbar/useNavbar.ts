import { useState } from "react";
import { useLoadingStore } from "stores/loadingStore";

export const useNavbar = () => {
  const isLoading = useLoadingStore((store) => store.isLoading);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return {
    closeMobileMenu,
    isMobileMenuOpen,
    toggleMobileMenu,
    visible: !isLoading,
  };
};
