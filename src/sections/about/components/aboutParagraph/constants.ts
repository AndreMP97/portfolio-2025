import { Variants } from "framer-motion";
import { fadeUp } from "constants/animations";

export interface IAboutAnimations {
  paragraph: Variants;
}

export const aboutParagraphAnimations: IAboutAnimations = {
  paragraph: fadeUp(0.8),
};
