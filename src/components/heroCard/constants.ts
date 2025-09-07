// Framer motion
import { Variants } from "framer-motion";

// Utils
import { fadeUp } from "utils/animations";

interface IHeroCardAnimations {
  button: Variants;
  container: Variants;
  description: Variants;
  image: Variants;
  subtitle: Variants;
  textContainer: Variants;
  title: Variants;
}

const common: Pick<
  IHeroCardAnimations,
  "button" | "container" | "description" | "subtitle" | "title"
> = {
  button: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  },
  container: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  },
  description: fadeUp(),
  subtitle: fadeUp(),
  title: fadeUp(),
};

export const heroCardAnimations = {
  desktop: {
    ...common,
    image: {
      hidden: { opacity: 0, x: 50, y: -20 },
      visible: {
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
        x: 0,
        y: 0,
      },
    },
    textContainer: {
      hidden: { opacity: 0, x: -50, y: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
        x: 0,
        y: 0,
      },
    },
  } as IHeroCardAnimations,

  mobile: {
    ...common,
    image: {
      hidden: { opacity: 0, x: 0, y: -50 },
      visible: {
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
        x: 0,
        y: 0,
      },
    },
    textContainer: {
      hidden: { opacity: 0, x: 0, y: 50 },
      visible: {
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
        x: 0,
        y: 0,
      },
    },
  } as IHeroCardAnimations,
};
