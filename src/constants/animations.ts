import { Variants } from "framer-motion";

/**
 * Fade upward animation-
 */
export const fadeUp = (duration = 0.6, distance = 20): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: { opacity: 1, transition: { duration }, y: 0 },
});

/**
 * Fade downward animation.
 */
export const fadeDown = (duration = 0.6, distance = 20): Variants => ({
  hidden: { opacity: 0, y: -distance },
  visible: { opacity: 1, transition: { duration }, y: 0 },
});
