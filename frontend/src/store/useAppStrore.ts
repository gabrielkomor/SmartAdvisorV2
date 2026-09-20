import { create } from "zustand";
import type { DecisionItem, MarketData } from "../types/decision";

type AppState = {
  theme: string;
  actionType: "Forex" | "Stock" | "ETF";
  symbol: string;
  timeFrame: string;
  timeDelta: number;
  timeBack: number;

  showCandles: boolean;
  showVolume: boolean;

  summary: DecisionItem;
  indicators: DecisionItem;
  marketData: MarketData[];
  symbols: string[];
  newChart: number;
  downloadStatus: string;
};

type AppStore = AppState & {
  setTheme: (theme: string) => void;
  setActionType: (type: AppState["actionType"]) => void;
  setSymbol: (symbol: string) => void;
  setTimeFrame: (timeFrame: string) => void;
  setTimeDelta: (timeDelta: number) => void;
  setTimeBack: (timeBacd: number) => void;

  setShowCandles: (value: boolean) => void;
  setShowVolume: (value: boolean) => void;

  setSummary: (summary: DecisionItem) => void;
  setIndicators: (indicators: DecisionItem) => void;
  setMarketData: (marketData: MarketData[]) => void;
  setSymbols: (symbols: string[]) => void;
  setNewChart: (value: number) => void;
  setDownloadStatus: (value: string) => void;
};

export const useAppStore = create<AppStore>((set) => ({
  theme: "corporate",
  actionType: "Forex",
  symbol: "EUR-USD",
  timeFrame: "1 h",
  timeDelta: 30,
  timeBack: 0,
  downloadStatus: "default",

  showCandles: false,
  showVolume: false,
  newChart: 0,

  summary: [
    { name: "Additive", value: "B/S/H" },
    { name: "Majority", value: "B/S/H" },
    { name: "Median", value: "B/S/H" },
  ],

  indicators: [
    { name: "SMA", value: "B/S/H" },
    { name: "RSI", value: "B/S/H" },
    { name: "BB", value: "B/S/H" },
    { name: "MACD", value: "B/S/H" },
    { name: "ADX", value: "B/S/H" },
    { name: "Volume", value: "B/S/H" },
  ],

  marketData: [],
  symbols: ["EUR-USD", "GBP-USD", "USD-JPY", "USD-CHF", "AUD-USD"],

  setTheme: (theme: string) => set({ theme }),
  setActionType: (type: "Forex" | "Stock" | "ETF") => set({ actionType: type }),
  setSymbol: (symbol: string) => set({ symbol }),
  setTimeFrame: (time: string) => set({ timeFrame: time }),
  setTimeDelta: (time: number) => set({ timeDelta: time }),
  setTimeBack: (time: number) => set({ timeBack: time }),

  setShowCandles: (value) => set({ showCandles: value }),
  setShowVolume: (value) => set({ showVolume: value }),

  setSummary: (summary) => set({ summary }),
  setIndicators: (indicators) => set({ indicators }),
  setMarketData: (marketData: MarketData[]) => set({ marketData }),
  setSymbols: (symbols: string[]) => set({ symbols }),
  setNewChart: (value) => set({ newChart: value }),
  setDownloadStatus: (value) => set({ downloadStatus: value }),
}));
