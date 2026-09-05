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
