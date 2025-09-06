// Framer-motion
import { motion } from "framer-motion";

// Components
import { ButtonLink, TButtonLinkProps } from "components/buttonLink";
import { useSectionInView } from "hooks/useSectionInView";

// Constants
import { contactCardAnimations } from "./constants";

export type TContactCardProps = {
  /**
   * The contact card buttons
   */
  buttons?: TButtonLinkProps[];

  /**
   * The contact card description
   */
  description: string;

  /**
   * The contact card title
   */
  title: string;
};

export const ContactCard: React.FC<TContactCardProps> = ({
  buttons,
  description,
  title,
}) => {
  const { ref, motionProps } = useSectionInView();

  return (
    <motion.div
      ref={ref}
      variants={contactCardAnimations.container}
      {...motionProps}
      className="border-space-blue bg-midnight-navy hover:border-aqua-mint mx-auto flex flex-col gap-6 rounded-lg border p-8 shadow-xl transition-colors duration-300"
    >
      <motion.h2
        variants={contactCardAnimations.title}
        className="text-center text-3xl leading-tight font-bold tracking-tight text-white"
      >
        {title}
      </motion.h2>

      <motion.div
        variants={contactCardAnimations.content}
        className="flex flex-col items-center gap-8 text-center"
      >
        <motion.p
          variants={contactCardAnimations.description}
          className="text-lavender-blue max-w-2xl text-lg leading-relaxed font-normal whitespace-break-spaces"
        >
          {description}
        </motion.p>

        {buttons && (
          <motion.div
            variants={contactCardAnimations.content}
            className="flex w-full flex-col gap-6 md:flex-row md:items-center md:justify-center md:gap-8"
          >
            {buttons.map((button, index) => (
              <motion.div key={index} variants={contactCardAnimations.button}>
                <ButtonLink {...button} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};
