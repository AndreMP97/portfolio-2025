// Components
import { Navbar } from "components/layout/Navbar";
import { PageLayout } from "components/layout/PageLayout";
import { Footer } from "components/layout/Footer";

// Constants
import { footerProps } from "constants/footer";
import { navbarProps } from "constants/navbar";

const App = () => {
  return (
    <div className="bg-navy-blue font-space-grotesk relative flex min-h-screen flex-col overflow-x-hidden">
      <Navbar {...navbarProps} />
      <PageLayout />
      <Footer {...footerProps} />
    </div>
  );
};

export default App;
