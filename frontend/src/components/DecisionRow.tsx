import type { Decision } from "../types/decision";

interface DecisionRowProps {
  title: string;
  decisions: Decision[];
}

const getColor = (decision: Decision) => {
  switch (decision) {
    case "buy":
      return "bg-green-500";
    case "sell":
      return "bg-red-500";
    case "hold":
      return "bg-gray-400";
  }
};

const DecisionRow = ({ title, decisions }: DecisionRowProps) => {
  return (
    <>
      <p className="text-black text-sm mb-0.5 text-center">{title}</p>
      <div className="border border-gray-700 rounded p-1 mt-0.5">
        <div
          className="grid"
          style={{ gridTemplateColumns: `repeat(${decisions.length}, 1fr)` }}
        >
          {decisions.map((decision, index) => (
            <div key={index} className="flex justify-center">
              <div className={`w-4 h-4 rounded-full ${getColor(decision)}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DecisionRow;
