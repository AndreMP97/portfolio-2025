import { motion } from "framer-motion";
import { letterVariants, panelVariants } from "./constants";
import { useLoader } from "./useLoader";

export const Loader: React.FC = () => {
  const { hideLetters, hideLoader, slidePanels } = useLoader();

  if (hideLoader) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] flex">
      {/* Left Panel */}
      <motion.div
        className="bg-midnight-navy absolute top-0 left-0 h-full w-1/2"
        variants={panelVariants}
        animate={slidePanels ? "slideLeft" : "hiddenLeft"}
      />

      {/* Right Panel */}
      <motion.div
        className="bg-midnight-navy absolute top-0 left-1/2 h-full w-1/2"
        variants={panelVariants}
        animate={slidePanels ? "slideRight" : "hiddenRight"}
      />

      {/* Letters loop animation while loading */}
      {!hideLetters && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="font-great-vibes -rotate-12 text-7xl leading-tight font-bold text-white"
            variants={letterVariants}
            animate="bounce"
          >
            AP
          </motion.span>
        </div>
      )}
    </div>
  );
};
