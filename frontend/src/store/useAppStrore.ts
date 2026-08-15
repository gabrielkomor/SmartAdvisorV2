import { create } from "zustand";

type AppState = {
  theme: string;
  actionType: "Forex" | "Stock" | "ETF";
  symbol: string;
  timeFrame: string;
  timeDelta: number;
  timeBack: number;

  showCandles: boolean;
  showSma10: boolean;
  showSma20: boolean;
  showSma30: boolean;
  showRsi: boolean;
  showBbUpper: boolean;
  showBbLower: boolean;
  showMacd: boolean;
  showMacdSignal: boolean;
  showMacdHisto: boolean;
  showDiPlus: boolean;
  showDiMinus: boolean;
  showAdx: boolean;
  showVolume: boolean;
};

type AppStore = AppState & {
  setTheme: (theme: string) => void;
  setActionType: (type: AppState["actionType"]) => void;
  setSymbol: (symbol: string) => void;
  setTimeFrame: (timeFrame: string) => void;
  setTimeDelta: (timeDelta: number) => void;
  setTimeBack: (timeBacd: number) => void;

  setShowCandles: (value: boolean) => void;
  setShowSma10: (value: boolean) => void;
  setShowSma20: (value: boolean) => void;
  setShowSma30: (value: boolean) => void;
  setShowRsi: (value: boolean) => void;
  setShowBbUpper: (value: boolean) => void;
  setShowBbLower: (value: boolean) => void;
  setShowMacd: (value: boolean) => void;
  setShowMacdSignal: (value: boolean) => void;
  setShowMacdHisto: (value: boolean) => void;
  setShowDiPlus: (value: boolean) => void;
  setShowDiMinus: (value: boolean) => void;
  setShowAdx: (value: boolean) => void;
  setShowVolume: (value: boolean) => void;
};

export const useAppStore = create<AppStore>((set) => ({
  theme: "corporate",
  actionType: "Forex",
  symbol: "BTC-USD",
  timeFrame: "1 H",
  timeDelta: 20,
  timeBack: 0,

  showCandles: false,
  showSma10: false,
  showSma20: false,
  showSma30: false,
  showRsi: false,
  showBbUpper: false,
  showBbLower: false,
  showMacd: false,
  showMacdSignal: false,
  showMacdHisto: false,
  showDiPlus: false,
  showDiMinus: false,
  showAdx: false,
  showVolume: false,

  setTheme: (theme: string) => set({ theme }),
  setActionType: (type: "Forex" | "Stock" | "ETF") => set({ actionType: type }),
  setSymbol: (symbol: string) => set({ symbol }),
  setTimeFrame: (time: string) => set({ timeFrame: time }),
  setTimeDelta: (time: number) => set({ timeDelta: time }),
  setTimeBack: (time: number) => set({ timeBack: time }),

  setShowCandles: (value) => set({ showCandles: value }),
  setShowSma10: (value) => set({ showSma10: value }),
  setShowSma20: (value) => set({ showSma20: value }),
  setShowSma30: (value) => set({ showSma30: value }),
  setShowRsi: (value) => set({ showRsi: value }),
  setShowBbUpper: (value) => set({ showBbUpper: value }),
  setShowBbLower: (value) => set({ showBbLower: value }),
  setShowMacd: (value) => set({ showMacd: value }),
  setShowMacdSignal: (value) => set({ showMacdSignal: value }),
  setShowMacdHisto: (value) => set({ showMacdHisto: value }),
  setShowDiPlus: (value) => set({ showDiPlus: value }),
  setShowDiMinus: (value) => set({ showDiMinus: value }),
  setShowAdx: (value) => set({ showAdx: value }),
  setShowVolume: (value) => set({ showVolume: value }),
}));
