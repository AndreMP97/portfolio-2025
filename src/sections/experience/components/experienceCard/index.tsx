// Framer-motion
import { motion } from "framer-motion";

// Components
import { Icon } from "components/icon";

// Constants
import { experienceCardAnimations } from "./constants";

// Hooks
import { useSectionInView } from "hooks/useSectionInView";

export type TExperienceCardProps = {
  /**
   * The experience card aria-label
   */
  ariaLabel: string;

  /**
   * The experience card bullet points
   */
  bulletPoints: string[];

  /**
   * The experience card company
   */
  company: string;

  /**
   * The experience card end date
   */
  endDate: string;

  /**
   * The experience card href
   */
  href: string;

  /**
   * The experience card position
   */
  position: string;

  /**
   * The experience card start date
   */
  startDate: string;
};

export const ExperienceCard: React.FC<TExperienceCardProps> = ({
  ariaLabel,
  bulletPoints,
  company,
  endDate,
  href,
  position,
  startDate,
}) => {
  const { motionProps, ref } = useSectionInView<HTMLAnchorElement>();

  return (
    <motion.a
      ref={ref}
      variants={experienceCardAnimations.container}
      {...motionProps}
      href={href}
      target="_blank"
      aria-label={ariaLabel}
      className="group border-aqua-mint bg-midnight-navy flex flex-col gap-3 rounded-lg border-l-2 p-5 pl-6 shadow-lg transition-all duration-300 hover:border-white hover:shadow-2xl"
    >
      <motion.div
        variants={experienceCardAnimations.content}
        className="flex flex-col gap-2"
      >
        <motion.div
          variants={experienceCardAnimations.position}
          className="flex items-center gap-3"
        >
          <Icon className="text-aqua-mint" iconName="FaBriefcase" />
          <h3 className="group-hover:text-aqua-mint text-xl leading-normal font-semibold text-white">
            {position}
          </h3>
        </motion.div>

        <motion.p
          variants={experienceCardAnimations.company}
          className="text-lavender-blue mb-1 text-lg leading-normal font-medium"
        >
          {company} |{" "}
          <span className="text-dusty-blue">
            {startDate} - {endDate}
          </span>
        </motion.p>

        <ul className="text-lavender-blue marker:text-aqua-mint list-inside list-disc space-y-1 pl-1 leading-relaxed font-normal">
          {bulletPoints.map((bulletPoint, index) => (
            <motion.li
              key={`bullet-${index}`}
              variants={experienceCardAnimations.bulletPoint}
            >
              {bulletPoint}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.a>
  );
};
