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
      <div className="bg-navy-blue font-space-grotesk relative flex h-svh flex-col overflow-hidden">
        <Navbar />
        <div
          id="content-wrapper"
          className="scrollbar-thin scrollbar-track-navy-blue scrollbar-thumb-lavender-blue scrollbar-thumb-rounded-full flex-1 flex-col overflow-x-hidden overflow-y-auto scroll-smooth"
        >
          <PageLayout />
          <Footer />
        </div>
        <Loader />
      </div>
    </BreakpointProvider>
  );
};

export default App;
