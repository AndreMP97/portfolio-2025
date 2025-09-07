// React
import { createContext, useContext, ReactNode, useMemo } from "react";

// Hooks
import { useBreakpoint } from "hooks/useBreakpoint";

export type TBreakpointContext = {
  isMobile: boolean;
  isTablet: boolean;
};

const BreakpointContext = createContext<TBreakpointContext | undefined>(
  undefined,
);

export const BreakpointProvider = ({ children }: { children: ReactNode }) => {
  const { isMobile, isTablet } = useBreakpoint();

  const contextValue = useMemo(
    () => ({ isMobile, isTablet }),
    [isMobile, isTablet],
  );

  return (
    <BreakpointContext.Provider value={contextValue}>
      {children}
    </BreakpointContext.Provider>
  );
};

export const useBreakpointContext = () => {
  const context = useContext(BreakpointContext);

  if (!context) {
    throw new Error("useMobile must be used within a BreakpointProvider");
  }

  return context;
};
