import { Variants } from "framer-motion";

export const fadeUp = (duration = 0.6): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, transition: { duration }, y: 0 },
});

export const ANIMATION_DELAY_BASE = 0.5; // In seconds
