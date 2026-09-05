import {
  CloudDownload,
  BarChart3,
  Signal,
  History,
  LineChart,
  Settings,
} from "lucide-react";
import type { Decision, NavItems } from "../types/decision";

export const decisionColor = (value: Decision): string => {
  switch (value) {
    case "BUY":
      return "btn-success text-white";
    case "SELL":
      return "btn-error text-white";
    case "HOLD":
      return "btn-warning text-black";
    case "BUY/SELL":
      return "btn text-black bg-gradient-to-r from-green-500 to-red-500";
    case "B/S/H":
      return "btn text-black bg-gradient-to-r from-green-500 via-red-500 to-yellow-500";
    case "BUY/SELL/HOLD":
      return "btn text-black bg-gradient-to-r from-green-500 via-red-500 to-yellow-500";
  }
};

export const navItems: NavItems = [
  {
    name: "Download Data",
    path: "/downloadData",
    icon: CloudDownload,
    divider: true,
  },
  {
    name: "Candle Chart",
    path: "/candleChart",
    icon: BarChart3,
    divider: true,
  },
  {
    name: "Signals History",
    path: "/signalsHistory",
    icon: Signal,
    divider: true,
  },
  {
    name: "History Decisions",
    path: "/historyDecisions",
    icon: History,
    divider: true,
  },
  {
    name: "Linear Decisions",
    path: "/linearDecisions",
    icon: LineChart,
    divider: true,
  },
  { name: "Settings", path: "/settings", icon: Settings, divider: false },
];
