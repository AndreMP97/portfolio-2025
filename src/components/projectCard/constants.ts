import { Variants } from "framer-motion";
import { fadeUp } from "constants/animations";

export interface IProjectCardAnimations {
  card: Variants;
  container: Variants;
  description: Variants;
  image: Variants;
  tags: Variants;
  title: Variants;
}

export const projectCardAnimations: IProjectCardAnimations = {
  card: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.6,
      },
    },
  },
  container: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  },
  description: fadeUp(0.4),
  image: fadeUp(0.5),
  tags: fadeUp(0.4),
  title: fadeUp(0.4),
};
