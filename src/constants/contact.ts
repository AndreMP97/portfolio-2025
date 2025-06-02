import { urls } from "./urls";
import { TContactCardProps } from "components/cards/ContactCard";

export const contact: TContactCardProps = {
  buttons: [
    {
      ariaLabel: "LinkedIn Profile",
      href: urls.linkedin,
      label: "LinkedIn Profile",
      leftIcon: "FaLinkedin",
    },
    {
      ariaLabel: "Personal email",
      href: urls.email,
      label: "Email",
      leftIcon: "FaEnvelope",
    },
  ],
  description:
    "I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great. Feel free to reach out!",
  title: "Get in touch",
};
