import { Variants } from "framer-motion";
import { fadeUp } from "utils/animations";

export interface IProjectCardAnimations {
  content: Variants;
  description: Variants;
  image: Variants;
  tags: Variants;
  title: Variants;
}

export const projectCardAnimations: IProjectCardAnimations = {
  content: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  },
  description: fadeUp(0.4),
  image: fadeUp(),
  tags: fadeUp(0.4),
  title: fadeUp(0.4),
};
