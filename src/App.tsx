// Components
import { Loader } from "layout/loader";
import { Navbar } from "components/layout/Navbar";
import { PageLayout } from "components/layout/PageLayout";
import { Footer } from "layout/footer";

// Constants
import { footerProps } from "constants/footer";
import { navbarProps } from "constants/navbar";
import { useEffect } from "react";
import { useLoadingStore } from "stores/loadingStore";

const App = () => {
  const setIsLoading = useLoadingStore((store) => store.setIsLoading);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <div className="bg-navy-blue font-space-grotesk relative flex min-h-screen flex-col overflow-x-hidden">
      <Loader />
      <Navbar {...navbarProps} />
      <PageLayout />
      <Footer {...footerProps} />
    </div>
  );
};

export default App;
