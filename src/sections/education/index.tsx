// Component
import { EducationCard } from "components/educationCard";

// Data
import { educationData } from "data/education";

export const EducationSection: React.FC = () => {
  return (
    <div className="space-y-8">
      {educationData.map((card) => (
        <EducationCard key={card.title} {...card} />
      ))}
    </div>
  );
};
