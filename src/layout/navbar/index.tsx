// Framer-motion
import { motion } from "framer-motion";

// Components
import Hamburger from "hamburger-react";
import { LogoLink } from "components/logoLink";
import { DesktopNavbar } from "./components/desktop";
import { MobileNavbar } from "./components/mobile";

// Config
import { navbarConfig } from "config/navbar";

// Constants
import { navbarAnimations } from "./constants";
import { hoverInteraction } from "utils/animations";

// Hooks
import { useNavbar } from "./useNavbar";

export const Navbar: React.FC = () => {
  const { logoProps, navLinks, onClick: navbarOnClick } = navbarConfig;
  const { closeMobileMenu, isMobileMenuOpen, motionProps, toggleMobileMenu } =
    useNavbar();

  return (
    <motion.header
      variants={navbarAnimations.container}
      {...motionProps}
      className="border-b-space-blue bg-navy-blue z-navbar fixed inset-0 flex h-20 w-full items-center justify-center border-b border-solid whitespace-nowrap"
    >
      <nav
        className="container-layout flex flex-1 items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        <motion.span
          variants={navbarAnimations.logo}
          {...hoverInteraction}
          className="-rotate-12 p-2"
          tabIndex={-1}
        >
          <LogoLink
            {...logoProps}
            onClick={() => {
              navbarOnClick();
              closeMobileMenu();
            }}
          />
        </motion.span>

        <DesktopNavbar navLinks={navLinks} />

        {/* Mobile Toggle Button */}
        <div className="text-white focus-visible:outline-none md:hidden">
          <Hamburger
            distance="md"
            hideOutline
            label="Menu Button"
            size={28}
            toggled={isMobileMenuOpen}
            toggle={toggleMobileMenu}
          />
        </div>
      </nav>

      <MobileNavbar
        isOpen={isMobileMenuOpen}
        navLinks={navLinks}
        onClose={closeMobileMenu}
      />
    </motion.header>
  );
};
