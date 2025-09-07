// Assets
import Photo from "assets/photo.jpg";

// Components
import { ButtonLink, TButtonLinkProps } from "components/buttonLink";

// Constants
import { hoverInteraction } from "utils/animations";

// Framer-motion
import { motion } from "framer-motion";

// Hooks
import { useHeroCard } from "./useHeroCard";
import { baseConfig } from "config/base";

export type THeroCardProps = {
  /**
   * The hero card buttons.
   * @optional
   */
  buttons?: TButtonLinkProps[];

  /**
   * The hero card description.
   */
  description: string;

  /**
   * The hero card sub title.
   */
  subtitle: string;

  /**
   * The hero card title.
   */
  title: string;
};

export const HeroCard: React.FC<THeroCardProps> = ({
  buttons,
  description,
  subtitle,
  title,
}) => {
  const { ref, heroCardAnimations, motionProps } = useHeroCard();

  return (
    <motion.div
      ref={ref}
      variants={heroCardAnimations.container}
      {...motionProps}
      className="border-aqua-mint bg-midnight-navy relative mt-16 flex flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl border-2 p-6 shadow-2xl md:flex-row md:gap-12 md:p-8 lg:mt-20 lg:gap-16 lg:p-10"
    >
      <motion.div
        variants={heroCardAnimations.textContainer}
        className="order-2 flex flex-col items-start gap-4 text-left md:order-1"
      >
        <motion.h1
          variants={heroCardAnimations.title}
          className="text-4xl leading-tight font-bold tracking-tight text-white md:text-5xl md:leading-tight"
        >
          {title}
        </motion.h1>
        <motion.h2
          variants={heroCardAnimations.subtitle}
          className="text-3xl leading-tight font-semibold tracking-tight text-white md:text-4xl md:leading-tight"
        >
          {subtitle}
        </motion.h2>
        <motion.p
          variants={heroCardAnimations.description}
          className="text-lg leading-relaxed font-normal text-[#CCD6F6] md:text-xl md:leading-relaxed md:font-normal"
        >
          {description}
        </motion.p>
        {!!buttons &&
          buttons.map((button) => (
            <motion.div
              key={button.id}
              variants={heroCardAnimations.button}
              {...hoverInteraction}
              className="self-center md:self-start"
            >
              <ButtonLink {...button} />
            </motion.div>
          ))}
      </motion.div>

      <motion.img
        variants={heroCardAnimations.image}
        {...hoverInteraction}
        className="border-aqua-mint order-1 aspect-square h-32 w-32 rounded-full border-2 bg-cover bg-center bg-no-repeat hover:cursor-pointer md:order-2 md:h-40 md:w-40 lg:h-48 lg:w-48"
        src={Photo}
        alt="Portrait of André Pacheco"
        onClick={() =>
          window.open(baseConfig.linkedin, "_blank", "noopener noreferrer")
        }
      />
    </motion.div>
  );
};
