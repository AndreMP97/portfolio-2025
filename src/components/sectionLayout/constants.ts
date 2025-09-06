import { Variants } from "framer-motion";
import { fadeDown } from "constants/animations";

interface ISectionAnimations {
  title: Variants;
}

export const sectionAnimations: ISectionAnimations = {
  title: fadeDown(),
};
