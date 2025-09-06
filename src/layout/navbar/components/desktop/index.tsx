// Components
import { NavLink } from "components/navLink";

// Constants
import { TSection } from "constants/sections";

export type TDesktopNavbarProps = {
  /**
   * The navbar links
   * @requires
   */
  navLinks: TSection[];
};

export const DesktopNavbar: React.FC<TDesktopNavbarProps> = ({ navLinks }) => {
  return (
    <ul className="hidden items-center gap-6 md:flex">
      {navLinks.map((link) => (
        <li key={link.id}>
          <NavLink {...link} />
        </li>
      ))}
    </ul>
  );
};
