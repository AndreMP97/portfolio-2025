// Component
import { AboutParagraph } from "components/aboutParagraph";

// Data
import { aboutData } from "data/about";

export const AboutSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      {aboutData.paragraphs.map((paragraph, index) => (
        <AboutParagraph key={index} paragraph={paragraph} />
      ))}
    </div>
  );
};
