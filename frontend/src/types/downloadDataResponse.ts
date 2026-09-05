export type DownloadDataResponse = {
  market_data: Record<string, unknown>;
  aggregation_signals: Record<string, unknown>;
  experts_signals: Record<string, unknown>;
};
