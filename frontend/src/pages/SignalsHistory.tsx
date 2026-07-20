import type { JSX } from "react";
import SignalsHistoryChart from "../components/SignalsHistoryChart";

const SignalsHistory = (): JSX.Element => {
  return (
    <div className="grid grid-cols-1 h-full w-full">
      <SignalsHistoryChart />
    </div>
  );
};

export default SignalsHistory;
