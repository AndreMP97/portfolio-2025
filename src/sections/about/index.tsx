// Framer-motion
import { motion } from "framer-motion";

// Constants
import { about } from "constants/about";
import { aboutAnimations } from "./constants";

// Hooks
import { useSectionInView } from "hooks/useSectionInView";

export const AboutSection: React.FC = () => {
  const { ref, motionProps } = useSectionInView();

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-4"
      variants={aboutAnimations.container}
      {...motionProps}
    >
      {about.paragraphs.map((paragraph, index) => (
        <motion.p
          key={index}
          variants={aboutAnimations.paragraph}
          className="text-lavender-blue text-lg leading-relaxed font-normal"
        >
          {paragraph}
        </motion.p>
      ))}
    </motion.div>
  );
};
