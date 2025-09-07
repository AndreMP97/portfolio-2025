import { TSkillCardProps } from "components/skillCard";

export const skillsData: TSkillCardProps[] = [
  {
    description: "HTML, CSS, TypeScript",
    iconName: "FaCode",
  },
  {
    description: "React.js, React Native",
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
