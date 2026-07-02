import { createContext, useContext } from "react";
import type { Dispatch, SetStateAction } from "react";

export interface AppState {
  theme: string;
  action_type: string;
  symbol: string;
  time_frame: string;
  time_delta: number;
  time_back: number;
}

export interface AppStateContextType {
  appState: AppState;
  setAppState: Dispatch<SetStateAction<AppState>>;
}

export const AppStateContext = createContext<AppStateContextType | undefined>(
  undefined,
);

export const useAppState = () => {
  const context = useContext(AppStateContext);

  if (!context) {
    throw new Error("useAppState must be used inside AppStateProvider");
  }

  return context;
};
