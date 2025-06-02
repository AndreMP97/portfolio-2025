// Components
import { Navbar } from "components/layout/Navbar";
import { PageLayout } from "components/layout/PageLayout";
import { Footer } from "components/layout/Footer";

// Constants
import { footerProps } from "constants/footer";

const App = () => {
  return (
    <div className="bg-navy-blue font-space-grotesk relative flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <PageLayout />
      <Footer {...footerProps} />
    </div>
  );
};

export default App;
