import { ExperienceCard } from "components/cards/ExperienceCard";

export const ExperienceSection: React.FC = () => {
  const bulletPoints = [
    "Led front-end development for key client projects, improving user engagement by an average of 30%.",
    "Architected and implemented scalable front-end solutions using React and Next.js.",
    "Mentored junior developers and conducted code reviews to maintain high-quality standards.",
    "Collaborated with UX/UI designers and backend developers to deliver polished products.",
  ];

  return (
    <div className="flex flex-col gap-8">
      <ExperienceCard
        position="Lead Front-End Developer"
        company="Tech Solutions Inc."
        startDate="2021"
        endDate="Present"
        bulletPoints={bulletPoints}
      />
    </div>
  );
};
