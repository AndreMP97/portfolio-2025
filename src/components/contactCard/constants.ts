import { Variants } from "framer-motion";
import { fadeDown, fadeUp } from "constants/animations";

export interface IContactCardAnimations {
  button: Variants;
  container: Variants;
  content: Variants;
  description: Variants;
  title: Variants;
}

export const contactCardAnimations: IContactCardAnimations = {
  button: fadeUp(),
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  },
  content: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  },
  description: fadeUp(),
  title: fadeDown(),
};
