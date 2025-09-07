// nanoid
import { nanoid } from "nanoid/non-secure";

// Types
import { TSkillCardProps } from "components/skillCard";

type TSkillData = {
  id: string;
  props: TSkillCardProps;
};

const generateSkill = (props: TSkillCardProps): TSkillData => ({
  id: nanoid(),
  props,
});

export const skillsData: TSkillData[] = [
  generateSkill({ description: "HTML, CSS, TypeScript", iconName: "FaCode" }),
  generateSkill({ description: "React.js, React Native", iconName: "FaReact" }),
  generateSkill({ description: "Responsive Design", iconName: "FaMobileAlt" }),
  generateSkill({ description: "Git & Version Control", iconName: "FaGitAlt" }),
  generateSkill({ description: "DevTools & Debugging", iconName: "FaTools" }),
  generateSkill({ description: "Optimization", iconName: "FaTachometerAlt" }),
] as const;
