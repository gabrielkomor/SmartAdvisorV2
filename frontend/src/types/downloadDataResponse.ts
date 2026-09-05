import type { Decision, MarketDataRe } from "./decision";

export type DownloadDataResponse = {
  market_data: {
    market_data: MarketDataRe[];
  };

  aggregation_signals: Record<string, Decision>;

  experts_signals: Record<string, Decision>;
};
