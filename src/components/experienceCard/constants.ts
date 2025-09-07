import { Variants } from "framer-motion";
import { fadeUp } from "utils/animations";

export interface IExperienceCardAnimations {
  bulletPoint: Variants;
  company: Variants;
  container: Variants;
  content: Variants;
  position: Variants;
}

export const experienceCardAnimations: IExperienceCardAnimations = {
  bulletPoint: fadeUp(0.4),
  company: fadeUp(),
  container: {
    hidden: { opacity: 0, x: 200 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
      x: 0,
    },
  },
  content: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  },
  position: fadeUp(),
};
