// Constants
import { iconMap } from "constants/icons";

// Types
import { educationCardType, TEducationCardType } from "./EducationCard.types";

export type TEducationCardProps = {
  /**
   * The eduction card bullet points
   * @requires
   */
  bulletPoints: string[];
  /**
   * The eduction card bullet points title
   * @example "Skills acquired"
   * @requires
   */
  bulletPointsTitle: string;
  /**
   * The eduction card description
   * @requires
   */
  description: string;
  /**
   * The education card end date
   * @requires
   */
  endDate: string;
  /**
   * The education card place
   * @requires
   */
  place: string;
  /**
   * The education card start date
   * @requires
   */
  startDate?: string;
  /**
   * The eduction card title
   * @requires
   */
  title: string;
  /**
   * The eduction card type
   * @requires
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
  const Icon =
    type === educationCardType.university
      ? iconMap["FaGraduationCap"]
      : iconMap["FaCertificate"];

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-4">
        <Icon className="text-aqua-mint" size={32} />
        <h3 className="text-xl leading-normal font-semibold text-white">
          {title}
        </h3>
      </div>
      <div>
        <p className="text-lavender-blue mt-1 text-lg leading-normal font-medium">
          {place} |{" "}
          <span className="text-dusty-blue">
            {startDate && `${startDate} - `}
            {endDate}
          </span>
        </p>
        <p className="text-lavender-blue mt-2 text-base leading-relaxed font-normal">
          {description}
        </p>
        <div className="mt-3">
          <h4 className="text-md text-aqua-mint mb-1 leading-tight font-semibold">
            {bulletPointsTitle}
          </h4>
          <ul className="text-lavender-blue marker:text-aqua-mint list-inside list-disc space-y-1 text-base leading-relaxed font-normal">
            {bulletPoints.map((bulletPoint) => (
              <li>{bulletPoint}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
