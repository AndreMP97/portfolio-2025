import { Variants } from "framer-motion";
import { fadeUp } from "constants/animations";

interface ISkillsAnimations {
  container: Variants;
  card: Variants;
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
