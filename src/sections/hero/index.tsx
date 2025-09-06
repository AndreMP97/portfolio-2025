// Components
import { HeroCard } from "./components/heroCard";

// Zustand store
import { usePortfolioStore } from "stores/portfolioStore";

export const HeroSection: React.FC = () => {
  const hero = usePortfolioStore(store => store.hero);

  if (!hero) return;

  return <HeroCard {...hero} />;
};
