import Photo from "assets/photo.jpg";
import { ButtonLink } from "components/buttonLink";
import { hero } from "constants/hero";
import { urls } from "constants/urls";

export const HeroCard: React.FC = () => {
  return (
    <div className="border-aqua-mint bg-midnight-navy relative mt-16 flex flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl border-2 p-6 shadow-2xl md:flex-row md:p-8 lg:mt-20 lg:p-10">
      <div className="order-2 flex flex-col items-start gap-4 text-left md:order-1">
        <h1 className="text-4xl leading-tight font-bold tracking-tight text-white md:text-5xl md:leading-tight">
          {hero.title}
        </h1>
        <h2 className="text-3xl leading-tight font-semibold tracking-tight text-white md:text-4xl md:leading-tight">
          {hero.subtitle}
        </h2>
        <p className="text-lg leading-relaxed font-normal text-[#CCD6F6] md:text-xl md:leading-relaxed md:font-normal">
          {hero.description}
        </p>
        <ButtonLink
          ariaLabel="Resume download"
          href={urls.resume}
          label="Resume"
        />
      </div>
      <img
        className="border-aqua-mint order-1 aspect-square h-32 w-32 rounded-full border-2 bg-cover bg-center bg-no-repeat md:order-2 md:h-40 md:w-40 lg:h-48 lg:w-48"
        src={Photo}
        alt="André Pacheco Photo"
      />
    </div>
  );
};
