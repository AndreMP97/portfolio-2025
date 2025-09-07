// Components
import { HeroCard } from "components/heroCard";

// Data
import { heroData } from "data/hero";

export const HeroSection: React.FC = () => {
  return <HeroCard {...heroData} />;
};
