// Framer Motion
import { motion, AnimatePresence } from "framer-motion";

// Components
import { NavLink } from "components/navLink";

// Constants
import { TSection } from "constants/sections";
import { navbarAnimations } from "layout/navbar/constants";

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
          className="bg-navy-blue/70 fixed top-20 left-0 z-40 h-[calc(100vh-5rem)] w-full text-white backdrop-blur-xs md:hidden"
        >
          <motion.ul className="flex h-full flex-col items-center justify-center gap-8 text-xl">
            {navLinks.map((link) => (
              <motion.li
                key={link.id}
                variants={navbarAnimations.mobileMenuItem}
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
