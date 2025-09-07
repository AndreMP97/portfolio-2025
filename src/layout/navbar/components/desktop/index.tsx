// Framer Motion
import { motion } from "framer-motion";

// Components
import { NavLink } from "components/navLink";

// Config
import { TSection } from "config/sections";

// Constants
import { navbarAnimations } from "layout/navbar/constants";
import { hoverInteraction } from "utils/animations";

// Hoooks
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
      variants={navbarAnimations.desktopLinks}
      {...motionProps}
      className="hidden items-center gap-6 md:flex"
    >
      {navLinks.map((link) => (
        <motion.li
          key={link.id}
          variants={navbarAnimations.desktopLinkItem}
          {...hoverInteraction}
          tabIndex={-1}
        >
          <NavLink id={link.id} label={link.title} />
        </motion.li>
      ))}
    </motion.ul>
  );
};
