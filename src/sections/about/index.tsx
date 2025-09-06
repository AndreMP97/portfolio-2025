// Components
import { AboutParagraph } from "./components/aboutParagraph";

// Constants
import { about } from "constants/about";

export const AboutSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      {about.paragraphs.map((paragraph, index) => (
        <AboutParagraph key={index} paragraph={paragraph} />
      ))}
    </div>
  );
};
