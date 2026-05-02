type Decision = "BUY" | "SELL" | "HOLD";
type DecisionItem = Array<{ name: string; value: Decision }>;

export const decisionColor = (value: Decision): string => {
  switch (value) {
    case "BUY":
      return "btn-success text-white";
    case "SELL":
      return "btn-error text-white";
    case "HOLD":
      return "btn-warning text-black";
  }
};

export const summary: DecisionItem = [
  { name: "Additive", value: "HOLD" },
  { name: "Majority", value: "BUY" },
  { name: "Median", value: "BUY" },
];

export const indicators: DecisionItem = [
  { name: "SMA", value: "BUY" },
  { name: "RSI", value: "HOLD" },
  { name: "BB", value: "HOLD" },
  { name: "MACD", value: "HOLD" },
  { name: "ADX", value: "BUY" },
  { name: "Volume", value: "SELL" },
];
