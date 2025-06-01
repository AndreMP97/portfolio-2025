import { iconMap, TIconName } from "constants/icons";

export type TSkillCardProps = {
  /**
   * The skill card description
   * @requires
   */
  description: string;
  /**
   * The skill card icon
   * @requires
   */
  iconName: TIconName;
};

export const SkillCard: React.FC<TSkillCardProps> = ({
  description,
  iconName,
}) => {
  const Icon = iconMap[iconName];

  return (
    <div className="border-space-blue bg-midnight-navy hover:border-aqua-mint flex flex-1 items-center gap-5 rounded-lg border p-4 shadow-md transition-colors md:p-6">
      <Icon className="text-aqua-mint" size={32} />
      <h3 className="text-lg leading-tight font-semibold text-white">
        {description}
      </h3>
    </div>
  );
};
