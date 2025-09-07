// Component
import { ExperienceCard } from "components/experienceCard";

// Data
import { experienceData } from "data/experience";

export const ExperienceSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      {experienceData.map(({ id, props }) => (
        <ExperienceCard key={id} {...props} />
      ))}
    </div>
  );
};
