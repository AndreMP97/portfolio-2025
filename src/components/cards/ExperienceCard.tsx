import { FaBriefcase } from "react-icons/fa";

export type TExperienceCardProps = {
  /**
   * The experience card company
   * @requires
   */
  bulletPoints: string[];
  /**
   * The experience card company
   * @requires
   */
  company: string;
  /**
   * The experience card end date
   * @requires
   */
  endDate: string;
  /**
   * The experience card position
   * @requires
   */
  position: string;
  /**
   * The experience card start date
   * @requires
   */
  startDate: string;
};

export const ExperienceCard: React.FC<TExperienceCardProps> = ({
  bulletPoints,
  company,
  endDate,
  position,
  startDate,
}) => {
  return (
    <div className="border-aqua-mint bg-midnight-navy hover:border-bright-aqua flex flex-col gap-3 rounded-lg border-l-2 p-5 pl-6 shadow-lg transition-colors duration-300 hover:shadow-xl">
      <div className="flex items-center gap-3">
        <FaBriefcase className="text-aqua-mint" size={24} />
        <h3 className="text-2xl leading-normal font-semibold text-white">
          {position}
        </h3>
      </div>
      <p className="text-lavender-blue mb-1 text-lg leading-normal font-medium">
        {company} |{" "}
        <span className="text-dusty-blue">
          {startDate} - {endDate}
        </span>
      </p>
      <ul className="text-lavender-blue marker:text-aqua-mint list-inside list-disc space-y-1 pl-1 leading-relaxed font-normal">
        {bulletPoints.map((bulletPoint) => (
          <li>{bulletPoint}</li>
        ))}
      </ul>
    </div>
  );
};
