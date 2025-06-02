import { ContactCard } from "components/cards/ContactCard";
import { sections } from "constants/sections";
import { urls } from "constants/urls";

export const ContactSection: React.FC = () => {
  return (
    <ContactCard
      title={sections.contact.altTitle ?? sections.contact.title}
      description="I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of something great. Feel free to reach
            out!"
      email=""
      linkedin={urls.linkedin}
    />
  );
};
