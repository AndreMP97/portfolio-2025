import { iconMap, TIconName } from "constants/icons";
import { useMemo } from "react";
import { IconBaseProps } from "react-icons";

export type TIconProps = IconBaseProps & {
  /**
   * The icon name.
   */
  iconName: TIconName;

  /**
   * The icon size.
   * @optional
   * @default 28
   */
  size?: number;
};

export const Icon: React.FC<TIconProps> = ({
  className,
  iconName,
  size = 28,
  ...props
}) => {
  const Icon = iconMap[iconName];

  const rootClasses = useMemo(() => {
    let result = "flex-shrink-0";
    if (className) result = `${result} ${className}`;
    return result;
  }, [className]);

  return <Icon className={rootClasses} size={size} {...props} />;
};
