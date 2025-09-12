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
  generateSkill({
    description: "HTML, CSS, TypeScript",
    iconName: "IoCodeSlashOutline",
  }),
  generateSkill({
    description: "React.js, React Native",
    iconName: "IoLogoReact",
  }),
  generateSkill({
    description: "Responsive Design",
    iconName: "IoPhonePortraitOutline",
  }),
  generateSkill({
    description: "Git & Version Control",
    iconName: "IoGitMergeOutline",
  }),
  generateSkill({
    description: "DevTools & Debugging",
    iconName: "IoHammer",
  }),
  generateSkill({ description: "Optimization", iconName: "IoSpeedometer" }),
] as const;
