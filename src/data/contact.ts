// Config
import { baseConfig } from "config/base";

// Types
import { TContactCardProps } from "components/contactCard";

export const contactData: TContactCardProps = {
  buttons: [
    {
      ariaLabel: "LinkedIn Profile",
      href: baseConfig.linkedin,
      label: "LinkedIn Profile",
      leftIcon: "FaLinkedin",
    },
    {
      ariaLabel: "Personal email",
      href: baseConfig.email,
      label: "Email",
      leftIcon: "FaEnvelope",
    },
  ],
  description:
    "I'm always open to discuss new projects, ideas or opportunities.\nFeel free to reach out!",
  title: "Get in touch",
};
