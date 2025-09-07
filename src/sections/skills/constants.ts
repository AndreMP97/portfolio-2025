// Constants
import { fadeUp } from "utils/animations";

// Framer-motion
import { Variants } from "framer-motion";

interface ISkillsAnimations {
  card: Variants;
  container: Variants;
}

export const skillsAnimations: ISkillsAnimations = {
  card: fadeUp(),
  container: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
};
