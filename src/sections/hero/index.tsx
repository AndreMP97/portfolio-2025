// Components
import { HeroCard } from "components/cards/heroCard";

// Constants
import { hero } from "constants/hero";
import { urls } from "constants/urls";

export const HeroSection: React.FC = () => {
  return (
    <section className="@container sm:p-4" id="hero">
      <div className="border-aqua-mint bg-midnight-navy relative flex min-h-[400px] flex-col items-start justify-center gap-6 overflow-hidden border-2 px-6 shadow-xl sm:gap-8 sm:rounded-2xl sm:p-8">
        <div
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          aria-hidden="true"
        >
          <HeroCard className="size-full" />
        </div>
        <header className="z-10 flex w-full flex-col gap-4 text-left">
          <h1 className="text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl">
            {hero.title}
          </h1>
          <p className="text-lavender-blue text-lg leading-relaxed font-normal sm:text-xl">
            {hero.description}
          </p>
        </header>
        <a
          className="border-aqua-mint text-aqua-mint hover:bg-bright-aqua hover:text-navy-blue z-10 flex h-12 max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md border bg-transparent px-6 text-base font-bold tracking-[0.015em] transition-colors sm:h-14 sm:px-7 sm:text-lg"
          href={urls.resume}
          aria-label="Download resume"
        >
          <span className="truncate">Resume</span>
        </a>
      </div>
    </section>
  );
};
