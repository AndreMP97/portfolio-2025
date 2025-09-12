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
  mobileMenuLinks: Variants;
  mobileMenuLinksItem: Variants;
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
        staggerChildren: 0.2,
      },
    },
  },
  logo: fadeDown(0.8),
  mobileMenu: {
    exit: { transition: { duration: 0.3, type: "tween" }, x: "100%" },
    hidden: { x: "100%" },
    visible: { transition: { duration: 0.3, type: "tween" }, x: 0 },
  },
  mobileMenuLinks: {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  },
  mobileMenuLinksItem: fadeUp(),
};
