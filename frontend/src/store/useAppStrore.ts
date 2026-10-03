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
  summary: DecisionItem;
  indicators: DecisionItem;
  marketData: MarketData[];
  symbols: string[];
  newChart: number;
  downloadStatus: string;

  histBuyLabels: number[];
  histSellLabels: number[];
  histHoldLabels: number[];
  histBuyData: number[];
  histSellData: number[];
  histHoldData: number[];

  linearBuyLabels: number[];
  linearSellLabels: number[];
  linearHoldLabels: number[];
  linearBuyData: number[];
  linearSellData: number[];
  linearHoldData: number[];
};

type AppStore = AppState & {
  setTheme: (theme: string) => void;
  setActionType: (type: AppState["actionType"]) => void;
  setSymbol: (symbol: string) => void;
  setTimeFrame: (timeFrame: string) => void;
  setTimeDelta: (timeDelta: number) => void;
  setTimeBack: (timeBacd: number) => void;
  setShowCandles: (value: boolean) => void;
  setSummary: (summary: DecisionItem) => void;
  setIndicators: (indicators: DecisionItem) => void;
  setMarketData: (marketData: MarketData[]) => void;
  setSymbols: (symbols: string[]) => void;
  setNewChart: (value: number) => void;
  setDownloadStatus: (value: string) => void;

  setHistBuyLabels: (data: number[]) => void;
  setHistSellLabels: (data: number[]) => void;
  setHistHoldLabels: (data: number[]) => void;
  setHistBuyData: (data: number[]) => void;
  setHistSellData: (data: number[]) => void;
  setHistHoldData: (data: number[]) => void;

  setLinearBuyLabels: (data: number[]) => void;
  setLinearSellLabels: (data: number[]) => void;
  setLinearHoldLabels: (data: number[]) => void;
  setLinearBuyData: (data: number[]) => void;
  setLinearSellData: (data: number[]) => void;
  setLinearHoldData: (data: number[]) => void;
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

  histBuyLabels: [],
  histSellLabels: [],
  histHoldLabels: [],
  histBuyData: [],
  histSellData: [],
  histHoldData: [],

  linearBuyLabels: [],
  linearSellLabels: [],
  linearHoldLabels: [],
  linearBuyData: [],
  linearSellData: [],
  linearHoldData: [],

  setTheme: (theme: string) => set({ theme }),
  setActionType: (type: "Forex" | "Stock" | "ETF") => set({ actionType: type }),
  setSymbol: (symbol: string) => set({ symbol }),
  setTimeFrame: (time: string) => set({ timeFrame: time }),
  setTimeDelta: (time: number) => set({ timeDelta: time }),
  setTimeBack: (time: number) => set({ timeBack: time }),
  setShowCandles: (value) => set({ showCandles: value }),
  setSummary: (summary) => set({ summary }),
  setIndicators: (indicators) => set({ indicators }),
  setMarketData: (marketData: MarketData[]) => set({ marketData }),
  setSymbols: (symbols: string[]) => set({ symbols }),
  setNewChart: (value) => set({ newChart: value }),
  setDownloadStatus: (value) => set({ downloadStatus: value }),

  setHistBuyLabels: (data) => set({ histBuyLabels: data }),
  setHistSellLabels: (data) => set({ histSellLabels: data }),
  setHistHoldLabels: (data) => set({ histHoldLabels: data }),
  setHistBuyData: (data) => set({ histBuyData: data }),
  setHistSellData: (data) => set({ histSellData: data }),
  setHistHoldData: (data) => set({ histHoldData: data }),

  setLinearBuyLabels: (data) => set({ linearBuyLabels: data }),
  setLinearSellLabels: (data) => set({ linearSellLabels: data }),
  setLinearHoldLabels: (data) => set({ linearHoldLabels: data }),
  setLinearBuyData: (data) => set({ linearBuyData: data }),
  setLinearSellData: (data) => set({ linearSellData: data }),
  setLinearHoldData: (data) => set({ linearHoldData: data }),
}));
