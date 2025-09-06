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
  /**
   * Whether the component is visible to trigger the animation.
   */
  visible: boolean;
};

export const DesktopNavbar: React.FC<TDesktopNavbarProps> = ({
  navLinks,
  visible,
}) => {
  const { motionProps } = useDesktopNavbar(visible);

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
