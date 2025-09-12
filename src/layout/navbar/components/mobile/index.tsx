// Framer Motion
import { motion, AnimatePresence } from "framer-motion";

// Components
import { NavLink } from "components/navLink";

// Config
import { TSection } from "config/sections";

// Constants
import { navbarAnimations } from "layout/navbar/constants";
import { hoverInteraction } from "utils/animations";

// Hooks
import { useMobileNavbar } from "./useMobileNavbar";

export type TMobileNavbarProps = {
  /**
   * Whether the mobile navbar is open
   */
  isOpen: boolean;

  /**
   * The navbar links
   */
  navLinks: TSection[];

  /**
   * Callback to close the navbar
   */
  onClose: () => void;
};

export const MobileNavbar: React.FC<TMobileNavbarProps> = ({
  isOpen,
  navLinks,
  onClose,
}) => {
  const { motionProps } = useMobileNavbar(isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          {...motionProps}
          variants={navbarAnimations.mobileMenu}
          className="bg-navy-blue z-navbar fixed inset-0 top-20 h-full w-full text-white md:hidden"
        >
          <motion.ul
            variants={navbarAnimations.mobileMenuLinks}
            className="flex h-full flex-col items-center justify-center gap-8 pb-20"
          >
            {navLinks.map((link) => (
              <motion.li
                key={link.id}
                variants={navbarAnimations.mobileMenuLinksItem}
                {...hoverInteraction}
                onClick={onClose}
              >
                <NavLink id={link.id} label={link.title} />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
