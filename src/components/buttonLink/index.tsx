import { Icon } from "components/icon";
import { TIconName } from "utils/icons";

export type TButtonLinkProps = {
  /**
   * The button aria-label.
   */
  ariaLabel: string;

  /**
   * The button href.
   */
  href: string;

  /**
   * The button id.
   */
  id: string;

  /**
   * The button label.
   */
  label: string;

  /**
   * The button left icon.
   * @optional
   */
  leftIcon?: TIconName;

  /**
   * The button left icon.
   * @optional
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
      className="border-aqua-mint focus-ring text-aqua-mint hover:bg-bright-aqua hover:text-navy-blue z-10 flex w-full min-w-20 items-center justify-center gap-4 self-center rounded-md border px-7 py-4 text-lg leading-normal font-medium transition-colors md:w-auto md:self-start"
      href={href}
    >
      {leftIcon && <Icon iconName={leftIcon} />}
      <span>{label}</span>
      {rightIcon && <Icon iconName={rightIcon} />}
    </a>
  );
};
