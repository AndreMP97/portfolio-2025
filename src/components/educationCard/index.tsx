// Components
import { Icon } from "components/icon";

// Constants
import { educationCardAnimations } from "./constants";

// Framer-motion
import { motion } from "framer-motion";

// Hooks
import { useSectionInView } from "hooks/useSectionInView";

// Types
import { educationCardType, TEducationCardType } from "./types";
import { useMemo } from "react";

export type TEducationCardProps = {
  /**
   * The eduction card bullet points.
   */
  bulletPoints: {
    bulletPoint: string;
    id: string;
  }[];

  /**
   * The eduction card bullet points title.
   * @example "Skills acquired"
   */
  bulletPointsTitle: string;

  /**
   * The eduction card description
   */
  description: string;

  /**
   * The education card end date
   */
  endDate: string;

  /**
   * The education card place
   */
  place: string;

  /**
   * The education card start date
   */
  startDate?: string;

  /**
   * The eduction card title
   */
  title: string;

  /**
   * The eduction card type
   */
  type: TEducationCardType;
};

export const EducationCard: React.FC<TEducationCardProps> = ({
  bulletPoints,
  bulletPointsTitle,
  description,
  endDate,
  place,
  startDate,
  title,
  type,
}) => {
  const { ref, motionProps } = useSectionInView();

  const iconName = useMemo(
    () =>
      type === educationCardType.university
        ? "FaGraduationCap"
        : "FaCertificate",
    [type],
  );

  return (
    <motion.div
      ref={ref}
      {...motionProps}
      variants={educationCardAnimations.container}
      className="flex flex-col gap-3"
    >
      <motion.div variants={educationCardAnimations.content}>
        <div className="flex items-center gap-4">
          <Icon className="text-aqua-mint" iconName={iconName} />
          <motion.h3
            variants={educationCardAnimations.title}
            className="text-xl leading-normal font-semibold text-white"
          >
            {title}
          </motion.h3>
        </div>

        <motion.p
          variants={educationCardAnimations.place}
          className="text-lavender-blue mt-1 text-lg leading-normal font-medium"
        >
          {place} |{" "}
          <span className="text-dusty-blue">
            {startDate != null && `${startDate} - `}
            {endDate}
          </span>
        </motion.p>

        <motion.p
          variants={educationCardAnimations.description}
          className="text-lavender-blue mt-2 text-base leading-relaxed font-normal"
        >
          {description}
        </motion.p>

        <motion.div variants={educationCardAnimations.content} className="mt-3">
          <motion.h4
            variants={educationCardAnimations.bulletPointTitle}
            className="text-md text-aqua-mint mb-1 leading-tight font-semibold"
          >
            {bulletPointsTitle}
          </motion.h4>
          <ul className="text-lavender-blue marker:text-aqua-mint list-inside list-disc space-y-1 pl-2 text-base leading-relaxed font-normal">
            {bulletPoints.map(({ id, bulletPoint }) => (
              <motion.li
                key={id}
                variants={educationCardAnimations.bulletPoint}
              >
                {bulletPoint}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
