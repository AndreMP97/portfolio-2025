import { ExperienceCard } from "components/cards/ExperienceCard";
import { experienceCards } from "constants/experience";

export const ExperienceSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      {experienceCards.map((props, index) => (
        <ExperienceCard key={`experience-card-${index}`} {...props} />
      ))}
    </div>
  );
};
