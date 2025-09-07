// Framer-motion
import { MotionProps, Variants } from "framer-motion";

// Utils
import { fadeUp } from "utils/animations";

interface IFooterAnimations {
  container: Variants;
  icon: Variants;
  iconsContainer: Variants;
  text: Variants;
}

export const footerAnimations: IFooterAnimations = {
  container: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  icon: fadeUp(0.4),
  iconsContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  text: fadeUp(),
};

export const footerInteractions: MotionProps = {
  whileHover: { rotate: 15, scale: 1.05 },
  whileTap: { scale: 0.95 },
};
