// Component
import { ContactCard } from "components/cards/ContactCard";

// Constants
import { contact } from "constants/contact";

export const ContactSection: React.FC = () => {
  return <ContactCard {...contact} />;
};
