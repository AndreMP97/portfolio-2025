// nanoid
import { nanoid } from "nanoid/non-secure";

// Types
import { TSkillCardProps } from "components/skillCard";

type TSkillData = {
  id: string;
  props: TSkillCardProps;
};

export const skillsData: TSkillData[] = [
  {
    id: nanoid(),
    props: {
      description: "HTML, CSS, TypeScript",
      iconName: "FaCode",
    },
  },
  {
    id: nanoid(),
    props: {
      description: "React.js, React Native",
      iconName: "FaReact",
    },
  },
  {
    id: nanoid(),
    props: {
      description: "Responsive Design",
      iconName: "FaMobileAlt",
    },
  },
  {
    id: nanoid(),
    props: {
      description: "Git & Version Control",
      iconName: "FaGitAlt",
    },
  },
  {
    id: nanoid(),
    props: {
      description: "DevTools & Debugging",
      iconName: "FaTools",
    },
  },
  {
    id: nanoid(),
    props: {
      description: "Optimization",
      iconName: "FaTachometerAlt",
    },
  },
] as const;
