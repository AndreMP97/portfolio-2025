import { Icon, TIconProps } from "components/icon";

export type TIconLinkProps = TIconProps & {
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
};

export const IconLink: React.FC<TIconLinkProps> = ({
  ariaLabel,
  href,
  iconName,
  size,
}) => {
  return (
    <a
      aria-label={ariaLabel}
      className="text-lavender-blue hover:text-aqua-mint transition-colors"
      href={href}
      target="_blank"
    >
      <Icon iconName={iconName} size={size} />
    </a>
  );
};
