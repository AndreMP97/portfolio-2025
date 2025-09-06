// Framer-motion
import { motion } from "framer-motion";

// Components
import { useSectionInView } from "hooks/useSectionInView";

// Constants
import { aboutParagraphAnimations } from "./constants";

export type TAboutParagraphProps = {
  /**
   * The paragraph to render.
   */
  paragraph: string;
};

export const AboutParagraph: React.FC<TAboutParagraphProps> = ({
  paragraph,
}) => {
  const { ref, motionProps } = useSectionInView();

  return (
    <motion.p
      ref={ref}
      variants={aboutParagraphAnimations.paragraph}
      {...motionProps}
      className="text-lavender-blue text-lg leading-relaxed font-normal"
    >
      {paragraph}
    </motion.p>
  );
};
