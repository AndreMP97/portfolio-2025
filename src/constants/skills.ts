import { TSkillCardProps } from "components/cards/SkillCard";

export const skills: TSkillCardProps[] = [
  {
    description: "HTML, CSS, TypeScript",
    iconName: "FaCode",
  },
  {
    description: "React.JS, React Native",
    iconName: "FaReact",
  },
  {
    description: "Responsive Design",
    iconName: "FaMobileAlt",
  },
  {
    description: "Git & Version Control",
    iconName: "FaGitAlt",
  },
  {
    description: "DevTools & Debugging",
    iconName: "FaTools",
  },
  {
    description: "Optimization",
    iconName: "FaTachometerAlt",
  },
] as const;
