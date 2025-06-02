import { iconMap, TIconName } from "constants/icons";

export type TIconLinkProps = {
  /**
   * The icon aria-label
   * @requires
   */
  ariaLabel: string;
  /**
   * The icon href
   * @requires
   */
  href: string;
  /**
   * The icon name
   * @requires
   */
  iconName: TIconName;
  /**
   * The icon size
   * @optional
   * @default 32
   */
  size?: number;
};

export const IconLink: React.FC<TIconLinkProps> = ({
  ariaLabel,
  href,
  iconName,
  size = 32,
}) => {
  const Icon = iconMap[iconName];

  return (
    <a
      aria-label={ariaLabel}
      className="text-lavender-blue hover:text-aqua-mint transition-colors"
      href={href}
      target="_blank"
    >
      <Icon size={size} />
    </a>
  );
};
