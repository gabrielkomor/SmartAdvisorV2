import { useState } from "react";
import type { ReactNode } from "react";
import { AppStateContext, type AppState } from "./AppStateContext";

export const AppStateProvider = ({ children }: { children: ReactNode }) => {
  const [appState, setAppState] = useState<AppState>({
    theme: "corporate",
    action_type: "forex",
    symbol: "NVDA",
    time_frame: "1 M",
    time_delta: 50,
    time_back: 50,
  });

  return (
    <AppStateContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppStateContext.Provider>
  );
};
