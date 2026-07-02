import { create } from "zustand";

type AppState = {
  theme: string;
  actionType: "Forex" | "Stock" | "ETF";
  symbol: string;
  timeFrame: string;
  timeDelta: number;
  timeBack: number;
};

type AppStore = AppState & {
  setTheme: (theme: string) => void;
  setActionType: (type: AppState["actionType"]) => void;
  setSymbol: (symbol: string) => void;
  setTimeFrame: (timeFrame: string) => void;
  setTimeDelta: (timeDelta: number) => void;
  setTimeBack: (timeBacd: number) => void;
};

export const useAppStore = create<AppStore>((set) => ({
  theme: "corporate",
  actionType: "Forex",
  symbol: "NVDA",
  timeFrame: "1 M",
  timeDelta: 50,
  timeBack: 45,

  setTheme: (theme) => set({ theme }),
  setActionType: (type) => set({ actionType: type }),
  setSymbol: (symbol) => set({ symbol }),
  setTimeFrame: (time) => set({ timeFrame: time }),
  setTimeDelta: (time) => set({ timeDelta: time }),
  setTimeBack: (time) => set({ timeBack: time }),
}));
