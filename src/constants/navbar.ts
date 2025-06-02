import { TNavbarProps } from "components/layout/Navbar";
import { sections } from "./sections";

export const navbarProps: TNavbarProps = {
  logoProps: {
    ariaLabel: sections.hero.title,
    href: `#${sections.hero.id}`,
    label: "AP",
  },
  navLinks: Object.values(sections).filter((section) => section.showInNavbar),
};
