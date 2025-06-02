// React
import { useState } from "react";

// Framer-motion
import { AnimatePresence, motion } from "framer-motion";

// Components
import { MobileNavbar } from "./Navbar/MobileNavbar";
import { DesktopNavbar } from "./Navbar/DesktopNavbar";
import { Icon } from "components/icon";
import { LogoLink, TLogoLinkProps } from "components/logoLink";

// Constants
import { TSection } from "constants/sections";

export type TNavbarProps = {
  /**
   * The navbar logo props
   * @requires
   */
  logoProps: TLogoLinkProps;
  /**
   * The navbar links
   * @requires
   */
  navLinks: TSection[];
};

export const Navbar: React.FC<TNavbarProps> = ({ logoProps, navLinks }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="border-b-space-blue bg-navy-blue/70 fixed z-50 flex h-20 w-full items-center justify-center border-b border-solid whitespace-nowrap">
      <nav
        className="container-layout flex h-full flex-1 items-center justify-between backdrop-blur-xs"
        role="navigation"
        aria-label="Main navigation"
      >
        <LogoLink {...logoProps} onClick={closeMobileMenu} />

        <DesktopNavbar navLinks={navLinks} />

        {/* Mobile Toggle Button */}
        <button
          className="text-2xl text-white focus:outline-none md:hidden"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isMobileMenuOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? (
                <Icon iconName="FaTimes" />
              ) : (
                <Icon iconName="FaBars" />
              )}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <MobileNavbar
        isOpen={isMobileMenuOpen}
        navLinks={navLinks}
        onClose={closeMobileMenu}
      />
    </header>
  );
};
