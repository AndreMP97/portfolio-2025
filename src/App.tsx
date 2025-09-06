// Components
import { Loader } from "layout/loader";
import { PageLayout } from "layout/pageLayout";
import { Navbar } from "layout/navbar";
import { Footer } from "layout/footer";

// Constants
import { footerProps } from "constants/footer";
import { navbarProps } from "constants/navbar";
import { useEffect } from "react";
import { useLoadingStore } from "stores/loadingStore";
import { MobileProvider } from "providers/mobileProvider";

const App = () => {
  const setIsLoading = useLoadingStore((store) => store.setIsLoading);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <MobileProvider>
      <div className="bg-navy-blue font-space-grotesk relative flex min-h-screen flex-col overflow-x-hidden">
        <Loader />
        <Navbar {...navbarProps} />
        <PageLayout />
        <Footer {...footerProps} />
      </div>
    </MobileProvider>
  );
};

export default App;
