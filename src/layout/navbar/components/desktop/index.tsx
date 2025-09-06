// Framer Motion
import { motion } from "framer-motion";

// Components
import { NavLink } from "components/navLink";

// Constants
import { TSection } from "constants/sections";
import { navbarAnimations } from "layout/navbar/constants";
import { useDesktopNavbar } from "./useDesktopNavbar";

export type TDesktopNavbarProps = {
  /**
   * The navbar links
   * @requires
   */
  navLinks: TSection[];
};

export const DesktopNavbar: React.FC<TDesktopNavbarProps> = ({ navLinks }) => {
  const { motionProps } = useDesktopNavbar();

  return (
    <motion.ul
      {...motionProps}
      variants={navbarAnimations.desktopLinks}
      className="hidden items-center gap-6 md:flex"
    >
      {navLinks.map((link) => (
        <motion.li key={link.id} variants={navbarAnimations.desktopLinkItem}>
          <NavLink {...link} />
        </motion.li>
      ))}
    </motion.ul>
  );
};
