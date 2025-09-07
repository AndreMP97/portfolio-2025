// Config
import { baseConfig } from "config/base";

// nanoid
import { nanoid } from "nanoid/non-secure";

// Types
import { TContactCardProps } from "components/contactCard";

export const contactData: TContactCardProps = {
  buttons: [
    {
      ariaLabel: "LinkedIn Profile",
      href: baseConfig.linkedin,
      id: nanoid(),
      label: "LinkedIn Profile",
      leftIcon: "FaLinkedin",
    },
    {
      ariaLabel: "Personal email",
      href: baseConfig.email,
      id: nanoid(),
      label: "Email",
      leftIcon: "FaEnvelope",
    },
  ],
  description:
    "I'm always open to discuss new projects, ideas or opportunities.\nFeel free to reach out!",
  title: "Get in touch",
};
