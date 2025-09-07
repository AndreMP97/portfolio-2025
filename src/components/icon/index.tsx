// React
import { useMemo } from "react";
import { IconBaseProps } from "react-icons";

// Utils
import { iconMap, TIconName } from "utils/icons";

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
    if (className != null) result = `${result} ${className}`;
    return result;
  }, [className]);

  return <Icon className={rootClasses} size={size} {...props} />;
};
