// Component
import { ContactCard } from "components/cards/ContactCard";

// Constants
import { contactProps } from "constants/contact";

export const ContactSection: React.FC = () => {
  return <ContactCard {...contactProps} />;
};
