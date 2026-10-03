import type { LucideIcon } from "lucide-react";

export type NavItems = Array<{
  name: string;
  path: string;
  icon: LucideIcon;
  divider: boolean;
}>;

export type Decision =
  | "BUY"
  | "SELL"
  | "HOLD"
  | "BUY/SELL"
  | "B/S/H"
  | "BUY/SELL/HOLD";

export type DecisionItem = Array<{ name: string; value: Decision }>;

export type MarketData = {
  x: number;
  o: number;
  h: number;
  l: number;
  c: number;
  y: number;
};

export type MarketDataRe = {
  Datetime: number;
  Open: number;
  High: number;
  Low: number;
  Close: number;
  Volume: number;
};

export type SignalTriple = {
  buy: number[];
  hold: number[];
  sell: number[];
};

export type DecisionSignals = {
  decisions: Decision[];
};

export type HistorySignal = {
  probabilities: SignalTriple;
  additive: DecisionSignals;
  majority: DecisionSignals;
  median: DecisionSignals;
};

export type HistorySignalsResponse = {
  period: number;
  history: HistorySignal;
};
