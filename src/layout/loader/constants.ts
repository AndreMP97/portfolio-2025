import { Variants, Transition } from "framer-motion";

const panelTransition: Transition = {
  duration: 1,
  ease: "easeInOut",
};

export const panelVariants: Variants = {
  // Desktop (horizontal)
  hiddenDown: { y: 0 },
  hiddenLeft: { x: 0 },
  hiddenRight: { x: 0 },
  hiddenUp: { y: 0 },
  slideDown: { transition: panelTransition, y: "100%" },
  slideLeft: { transition: panelTransition, x: "-100%" },
  slideRight: { transition: panelTransition, x: "100%" },
  slideUp: { transition: panelTransition, y: "-100%" },
};

export const letterVariants: Variants = {
  bounce: {
    transition: {
      duration: 1,
      ease: "easeInOut",
      repeat: Infinity,
    },
    y: [0, -10, 0],
  },
};

export const ANIMATION_FADE_OUT_LETTERS = 300;
export const ANIMATION_SLIDE_PANELS = 1000;
