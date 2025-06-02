export type TLogoLinkProps = {
  /**
   * The logo aria-label
   * @requires
   */
  ariaLabel: string;
  /**
   * The button href
   * @requires
   */
  href: string;
  /**
   * The logo label
   * @requires
   */
  label: string;
  /**
   * The logo additional onClick action
   * @requires
   */
  onClick?: () => void;
};

export const LogoLink: React.FC<TLogoLinkProps> = ({
  ariaLabel,
  href,
  label,
  onClick,
}) => {
  return (
    <a
      aria-label={ariaLabel}
      className="font-great-vibes hover:text-aqua-mint -rotate-12 text-3xl leading-tight font-bold text-white"
      href={href}
      onClick={onClick}
    >
      {label}
    </a>
  );
};
