// Components
import { Loader } from "layout/loader";
import { PageLayout } from "layout/pageLayout";
import { Navbar } from "layout/navbar";
import { Footer } from "layout/footer";

// Hooks
import { useSetup } from "hooks/useSetup";

// Providers
import { BreakpointProvider } from "providers/breakpointProvider";

const App = () => {
  const { mountKey } = useSetup();

  return (
    <BreakpointProvider key={mountKey}>
      <div className="bg-navy-blue font-space-grotesk relative flex min-h-screen flex-col overflow-x-hidden">
        <Navbar />
        <PageLayout />
        <Footer />
      </div>
      <Loader />
    </BreakpointProvider>
  );
};

export default App;
