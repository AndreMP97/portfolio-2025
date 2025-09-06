import { useIsMobile } from "hooks/useIsMobile";
import { createContext, useContext, ReactNode } from "react";

export type TMobileContext = {
  isMobile: boolean;
};

const MobileContext = createContext<TMobileContext | undefined>(undefined);

export const MobileProvider = ({ children }: { children: ReactNode }) => {
  const { isMobile } = useIsMobile();

  return (
    <MobileContext.Provider value={{ isMobile }}>
      {children}
    </MobileContext.Provider>
  );
};

export const useMobileContext = () => {
  const context = useContext(MobileContext);

  if (!context) {
    throw new Error("useMobile must be used within a MobileProvider");
  }

  return context;
};
