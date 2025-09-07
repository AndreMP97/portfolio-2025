// Framer-motion
import { Variants } from "framer-motion";

// Utils
import { fadeDown } from "utils/animations";

interface ISectionAnimations {
  title: Variants;
}

export const sectionAnimations: ISectionAnimations = {
  title: fadeDown(),
};
