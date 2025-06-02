import { iconMap, TIconName } from "constants/icons";
import { IconBaseProps } from "react-icons";

export type TIconProps = IconBaseProps & {
  /**
   * The icon name
   * @requires
   */
  iconName: TIconName;
  /**
   * The icon size
   * @optional
   * @default 28
   */
  size?: number;
};

export const Icon: React.FC<TIconProps> = ({
  iconName,
  size = 28,
  ...props
}) => {
  const Icon = iconMap[iconName];

  return <Icon size={size} {...props} />;
};
