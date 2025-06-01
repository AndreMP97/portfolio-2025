import { about } from "constants/about";

export const AboutSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      {about.paragraphs.map((paragraph) => (
        <p className="text-lavender-blue text-lg leading-relaxed font-normal">
          {paragraph}
        </p>
      ))}
    </div>
  );
};
