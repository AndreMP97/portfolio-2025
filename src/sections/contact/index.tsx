// Component
import { ContactCard } from "components/contactCard";

// Data
import { contactData } from "data/contact";

export const ContactSection: React.FC = () => {
  return <ContactCard {...contactData} />;
};
