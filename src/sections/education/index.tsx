import { EducationCard } from "./components/educationCard";
import { educationCardType } from "./components/educationCard/types";

export const EducationSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <EducationCard
        title="Bachelor of Science in Computer Science"
        place="State University"
        startDate="2014"
        endDate="2018"
        description="Major concentration in Web Development and Software Engineering. Graduated with Honors (Cum Laude)."
        bulletPointsTitle="Key Courses:"
        bulletPoints={[
          "Data Structures",
          "Algorithms",
          "Web Design",
          "Database Management",
        ]}
        type={educationCardType.university}
      />
    </div>
  );
};
