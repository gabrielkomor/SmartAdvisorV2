import axios from "axios";
import type { DownloadDataResponse } from "../types/downloadDataResponse";

export const downloadDataAPI = async (
  type: string,
  symbol: string,
  time_frame: string,
  time_delta: number,
  time_back: number,
) => {
  const { data } = await axios.post<DownloadDataResponse>(
    "http://localhost:8000/download_data_api",
    { type, symbol, time_frame, time_delta, time_back },
  );
  return data;
};
