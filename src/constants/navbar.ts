import { TNavbarProps } from "layout/navbar";
import { sections } from "./sections";

export const navbarProps: TNavbarProps = {
  logoProps: {
    ariaLabel: sections.hero.title,
    href: `#${sections.hero.id}`,
    label: "AP",
  },
  navLinks: Object.values(sections).filter((section) => section.showInNavbar),
};
