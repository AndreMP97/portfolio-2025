import { Icon } from "components/icon";
import { TIconName } from "constants/icons";

export type TButtonLinkProps = {
  /**
   * The button aria-label
   * @requires
   */
  ariaLabel: string;
  /**
   * The button href
   * @requires
   */
  href: string;
  /**
   * The button label
   * @requires
   */
  label: string;
  /**
   * The button left icon
   */
  leftIcon?: TIconName;
  /**
   * The button left icon
   */
  rightIcon?: TIconName;
};

export const ButtonLink: React.FC<TButtonLinkProps> = ({
  ariaLabel,
  href,
  label,
  leftIcon,
  rightIcon,
}) => {
  return (
    <a
      aria-label={ariaLabel}
      className="border-aqua-mint text-aqua-mint hover:bg-bright-aqua hover:text-navy-blue z-10 flex w-full min-w-20 items-center justify-center gap-4 self-center rounded-md border px-7 py-4 text-lg leading-normal font-medium transition-colors md:w-auto md:self-start"
      href={href}
    >
      {leftIcon && <Icon iconName={leftIcon} />}
      <span>{label}</span>
      {rightIcon && <Icon iconName={rightIcon} />}
    </a>
  );
};
