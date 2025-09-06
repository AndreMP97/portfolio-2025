// Framer-motion
import { motion } from "framer-motion";

// Components
import { SkillCard } from "./components/skillCard";

// Constants
import { skills } from "constants/skills";
import { skillsAnimations } from "./constants";

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
      {skills.map((skill) => (
        <motion.div key={skill.description} variants={skillsAnimations.card}>
          <SkillCard {...skill} />
        </motion.div>
      ))}
    </motion.div>
  );
};
