export type TNavLinkProps = {
  /**
   * The section id.
   */
  id: string;

  /**
   * The nav link label.
   */
  label: string;
};

export const NavLink: React.FC<TNavLinkProps> = ({ id, label }) => {
  return (
    <a
      className="hover:text-aqua-mint text-lg leading-normal font-medium text-white transition-colors"
      href={`#${id}`}
    >
      {label}
    </a>
  );
};
