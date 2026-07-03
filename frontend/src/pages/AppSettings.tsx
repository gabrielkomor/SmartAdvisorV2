import type { JSX } from "react";
import RadioGroup from "../components/RadioGroup";

export const AppSettings = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 lg:mb-16">
        Change app theme
      </h2>
      <RadioGroup />
    </div>
  );
};

export default AppSettings;
