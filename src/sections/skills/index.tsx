import { SkillCard } from "components/cards/SkillCard";
import { skills } from "constants/skills";

export const SkillsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-4">
      {skills.map((skill) => (
        <SkillCard {...skill} />
      ))}
    </div>
  );
};
