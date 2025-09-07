// Component
import { ExperienceCard } from "components/experienceCard";

// Data
import { experienceData } from "data/experience";

export const ExperienceSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      {experienceData.map((props, index) => (
        <ExperienceCard key={`experience-card-${index}`} {...props} />
      ))}
    </div>
  );
};
