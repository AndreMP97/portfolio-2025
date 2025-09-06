import { Variants } from "framer-motion";
import { fadeUp } from "constants/animations";

interface IAboutAnimations {
  container: Variants;
  paragraph: Variants;
}

export const aboutAnimations: IAboutAnimations = {
  container: {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  },
  paragraph: fadeUp(0.8),
};
