// Components
import { usePortfolioStore } from "stores/portfolioStore";
import { AboutParagraph } from "./components/aboutParagraph";

export const AboutSection: React.FC = () => {
  const about = usePortfolioStore((store) => store.about);

  return (
    <div className="flex flex-col gap-4">
      {about.map(({ paragraph }, index) => (
        <AboutParagraph key={index} paragraph={paragraph} />
      ))}
    </div>
  );
};
