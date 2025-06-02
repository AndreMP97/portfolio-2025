import { TFooterProps } from "components/layout/Footer";
import { urls } from "./urls";

export const footerProps: TFooterProps = {
  icons: [
    {
      ariaLabel: "GitHub Page",
      href: urls.github,
      iconName: "FaGithub",
    },
  ],
  name: "André Pacheco",
};
