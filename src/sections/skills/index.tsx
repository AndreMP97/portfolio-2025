// Framer-motion
import { motion } from "framer-motion";

// Component
import { SkillCard } from "components/skillCard";

// Constants
import { skillsAnimations } from "./constants";
import { hoverInteraction } from "utils/animations";

// Data
import { skillsData } from "data/skills";

// Hooks
import { useSectionInView } from "hooks/useSectionInView";

export const SkillsSection: React.FC = () => {
  const { ref, motionProps } = useSectionInView();

  return (
    <motion.div
      ref={ref}
      variants={skillsAnimations.container}
      {...motionProps}
      className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-4"
    >
      {skillsData.map((skill) => (
        <motion.div
          key={skill.description}
          variants={skillsAnimations.card}
          {...hoverInteraction}
        >
          <SkillCard {...skill} />
        </motion.div>
      ))}
    </motion.div>
  );
};
