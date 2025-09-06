import { motion } from "framer-motion";
import { letterVariants, panelVariants } from "./constants";
import { useLoader } from "./useLoader";

export const Loader: React.FC = () => {
  const {
    hideLetters,
    hideLoader,
    leftPanelClass,
    leftPanelAnimate,
    rightPanelAnimate,
    rightPanelClass,
  } = useLoader();

  if (hideLoader) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] flex">
      {/* Left Panel */}
      <motion.div
        animate={leftPanelAnimate}
        className={leftPanelClass}
        variants={panelVariants}
      />

      {/* Right Panel */}
      <motion.div
        animate={rightPanelAnimate}
        className={rightPanelClass}
        variants={panelVariants}
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
