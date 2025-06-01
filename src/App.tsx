import { Navbar } from "components/layout/Navbar";
import { PageLayout } from "components/layout/PageLayout";
import { Footer } from "components/layout/Footer";

const App = () => {
  return (
    <div className="dark group/design-root bg-navy-blue font-space-grotesk relative flex size-full min-h-screen flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <PageLayout />
        <Footer />
      </div>
    </div>
  );
};

export default App;
