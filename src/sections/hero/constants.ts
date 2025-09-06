import { ANIMATION_DELAY_BASE } from "constants/animation";
import { MotionProps, Variants } from "framer-motion";

interface IHeroAnimations {
  container: Variants;
  textContainer: Variants;
  title: Variants;
  subtitle: Variants;
  description: Variants;
  button: Variants;
  image: Variants;
}

const fadeUp = (duration = 0.6): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, transition: { duration }, y: 0 },
});

export const heroAnimations: IHeroAnimations = {
  button: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  },
  container: {
    hidden: {},
    visible: {
      transition: {
        delayChildren: ANIMATION_DELAY_BASE,
        staggerChildren: 0.2,
      },
    },
  },
  description: fadeUp(),
  image: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
      x: 0,
    },
  },
  subtitle: fadeUp(),
  textContainer: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
      x: 0,
    },
  },
  title: fadeUp(),
};

export const heroInteractions: MotionProps = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};
