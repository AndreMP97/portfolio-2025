export type TNavLinkProps = {
  /**
   * The section id
   * @requires
   */
  id: string;
  /**
   * The section id
   * @requires
   */
  title: string;
};

export const NavLink: React.FC<TNavLinkProps> = ({ id, title }) => {
  return (
    <a
      className="hover:text-aqua-mint text-lg leading-normal font-medium text-white transition-colors"
      href={`#${id}`}
    >
      {title}
    </a>
  );
};
