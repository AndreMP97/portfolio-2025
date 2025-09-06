// Component
import { ContactCard } from "./components/contactCard";

// Constants
import { contactProps } from "constants/contact";

export const ContactSection: React.FC = () => {
  return <ContactCard {...contactProps} />;
};
