// Components
import { Icon } from "components/icon";

// Types
import { TIconName } from "utils/icons";

export type TSkillCardProps = {
  /**
   * The skill card description
   */
  description: string;

  /**
   * The skill card icon
   */
  iconName: TIconName;
};

export const SkillCard: React.FC<TSkillCardProps> = ({
  description,
  iconName,
}) => {
  return (
    <div
      className="border-space-blue bg-midnight-navy hover:border-aqua-mint flex flex-1 items-center gap-5 rounded-lg border p-4 shadow-md transition-colors md:p-6"
      tabIndex={-1}
    >
      <Icon className="text-aqua-mint" iconName={iconName} />
      <h3 className="text-lg leading-tight font-semibold text-white">
        {description}
      </h3>
    </div>
  );
};
