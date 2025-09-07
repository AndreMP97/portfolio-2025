import { Variants } from "framer-motion";
import { fadeUp } from "constants/animations";

export interface IEducationCardAnimations {
  bulletPoint: Variants;
  bulletPointTitle: Variants;
  container: Variants;
  content: Variants;
  description: Variants;
  place: Variants;
  title: Variants;
}

export const educationCardAnimations: IEducationCardAnimations = {
  bulletPoint: fadeUp(0.4),
  bulletPointTitle: fadeUp(),
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  },
  content: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  },
  description: fadeUp(),
  place: fadeUp(),
  title: fadeUp(),
};
