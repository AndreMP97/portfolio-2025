// React
import { useEffect } from "react";

// Framer Motion
import { motion, AnimatePresence } from "framer-motion";

// Components
import { NavLink } from "components/navLink";

// Constants
import { TSection } from "constants/sections";

export type TMobileNavbarProps = {
  /**
   * Whether the mobile navbar is open
   * @requires
   */
  isOpen: boolean;
  /**
   * The navbar links
   * @requires
   */
  navLinks: TSection[];
  /**
   * Callback to close the navbar
   * @requires
   */
  onClose: () => void;
};

export const MobileNavbar: React.FC<TMobileNavbarProps> = ({
  isOpen,
  navLinks,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="bg-navy-blue/70 fixed top-20 left-0 z-40 h-[calc(100vh-5rem)] w-full text-white backdrop-blur-xs md:hidden"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, type: "tween" }}
        >
          <ul className="flex h-full flex-col items-center justify-center gap-8 text-xl">
            {navLinks.map((link) => (
              <li key={link.id} onClick={onClose}>
                <NavLink {...link} />
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
