import { Icon, TIconProps } from "components/icon";

export type TIconLinkProps = TIconProps & {
  /**
   * The icon aria-label.
   */
  ariaLabel: string;

  /**
   * The icon href.
   */
  href: string;
};

export const IconLink: React.FC<TIconLinkProps> = ({
  ariaLabel,
  href,
  ...iconProps
}) => {
  return (
    <a
      aria-label={ariaLabel}
      className="text-lavender-blue hover:text-aqua-mint focus-ring-full inline-block transition-colors"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon {...iconProps} />
    </a>
  );
};
