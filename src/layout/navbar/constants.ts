// Framer-motion
import { Variants } from "framer-motion";

// Utils
import { fadeDown, fadeUp } from "utils/animations";

interface INavbarAnimations {
  container: Variants;
  desktopLinkItem: Variants;
  desktopLinks: Variants;
  logo: Variants;
  mobileMenu: Variants;
  mobileMenuItem: Variants;
  toggleIcon: Variants;
}

export const navbarAnimations: INavbarAnimations = {
  container: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  desktopLinkItem: fadeDown(),
  desktopLinks: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  },
  logo: fadeDown(),
  mobileMenu: {
    exit: { transition: { duration: 0.3, type: "tween" }, x: "100%" },
    hidden: { x: "100%" },
    visible: { transition: { duration: 0.3, type: "tween" }, x: 0 },
  },
  mobileMenuItem: fadeUp(),
  toggleIcon: {
    animate: { opacity: 1, rotate: 0, scale: 1 },
    exit: { opacity: 0, rotate: 90, scale: 0.8 },
    initial: { opacity: 0, rotate: -90, scale: 0.8 },
  },
};
