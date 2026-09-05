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

  summary: DecisionItem;
  indicators: DecisionItem;
  marketData: MarketData[];
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

  setSummary: (summary: DecisionItem) => void;
  setIndicators: (indicators: DecisionItem) => void;
  setMarketData: (marketData: MarketData[]) => void;
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

  marketData: [
    {
      x: 1491004800000 + 43200000,
      o: 31.11,
      h: 33.04,
      l: 30.58,
      c: 32.03,
      y: 1200,
    },
    {
      x: 1491091200000 + 43200000,
      o: 32.05,
      h: 32.8,
      l: 31.4,
      c: 31.9,
      y: 1200,
    },
    {
      x: 1491177600000 + 43200000,
      o: 31.9,
      h: 34.77,
      l: 30.35,
      c: 33.1,
      y: 2800,
    },
    {
      x: 1491264000000 + 43200000,
      o: 33.1,
      h: 34.68,
      l: 32.2,
      c: 32.48,
      y: 2100,
    },
    {
      x: 1491350400000 + 43200000,
      o: 32.5,
      h: 33.49,
      l: 28.72,
      c: 30.46,
      y: 3200,
    },
    {
      x: 1491436800000 + 43200000,
      o: 30.5,
      h: 31.83,
      l: 27.02,
      c: 29.76,
      y: 1700,
    },
  ],

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

  setSummary: (summary) => set({ summary }),
  setIndicators: (indicators) => set({ indicators }),
  setMarketData: (marketData: MarketData[]) => set({ marketData }),
}));
