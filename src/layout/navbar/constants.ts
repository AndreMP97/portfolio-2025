import { Variants, MotionProps } from "framer-motion";
import { ANIMATION_DELAY_BASE, fadeDown, fadeUp } from "constants/animations";

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
        delayChildren: ANIMATION_DELAY_BASE,
        staggerChildren: 0.2,
      },
    },
  },
  desktopLinkItem: fadeDown(),
  desktopLinks: {
    hidden: {},
    visible: {
      transition: {
        delayChildren: ANIMATION_DELAY_BASE,
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

export const navbarInteractions: MotionProps = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
};
