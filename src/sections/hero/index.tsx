// Components
import { HeroCard } from "./components/heroCard";

// Constants:
import { hero } from "constants/hero";

export const HeroSection: React.FC = () => {
  return <HeroCard {...hero} />;
};
