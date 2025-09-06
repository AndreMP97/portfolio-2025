// Assets
import Photo from "assets/photo.jpg";

// Components
import { ButtonLink } from "components/buttonLink";

// Constants
import { hero } from "constants/hero";
import { urls } from "constants/urls";

// Framer-motion
import { motion } from "framer-motion";
import { useHeroSection } from "./useHeroSection";
import { heroAnimations, heroInteractions } from "./constants";

export const HeroSection: React.FC = () => {
  const { ref, visible } = useHeroSection();

  return (
    <motion.div
      ref={ref}
      variants={heroAnimations.container}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      className="border-aqua-mint bg-midnight-navy relative mt-16 flex flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl border-2 p-6 shadow-2xl md:flex-row md:gap-12 md:p-8 lg:mt-20 lg:gap-16 lg:p-10"
    >
      <motion.div
        variants={heroAnimations.textContainer}
        className="order-2 flex flex-col items-start gap-4 text-left md:order-1"
      >
        <motion.h1
          variants={heroAnimations.title}
          className="text-4xl leading-tight font-bold tracking-tight text-white md:text-5xl md:leading-tight"
        >
          {hero.title}
        </motion.h1>
        <motion.h2
          variants={heroAnimations.subtitle}
          className="text-3xl leading-tight font-semibold tracking-tight text-white md:text-4xl md:leading-tight"
        >
          {hero.subtitle}
        </motion.h2>
        <motion.p
          variants={heroAnimations.description}
          className="text-lg leading-relaxed font-normal text-[#CCD6F6] md:text-xl md:leading-relaxed md:font-normal"
        >
          {hero.description}
        </motion.p>
        <motion.div
          {...heroInteractions}
          variants={heroAnimations.button}
          className="self-center md:self-start"
        >
          <ButtonLink
            ariaLabel="Resume download"
            href={urls.resume}
            label="Resume"
          />
        </motion.div>
      </motion.div>

      <motion.img
        {...heroInteractions}
        variants={heroAnimations.image}
        className="border-aqua-mint order-1 aspect-square h-32 w-32 rounded-full border-2 bg-cover bg-center bg-no-repeat md:order-2 md:h-40 md:w-40 lg:h-48 lg:w-48"
        src={Photo}
        alt="Portrait of André Pacheco"
      />
    </motion.div>
  );
};
