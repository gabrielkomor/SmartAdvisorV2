import type { JSX } from "react";
import { useAppStore } from "../store/useAppStrore";

const RadioGroup = (): JSX.Element => {
  const theme = useAppStore((state) => state.theme);
  const setTheme = useAppStore((state) => state.setTheme);

  return (
    <div className="ml-3 grid grid-cols-2 gap-x-6 md:gap-x-18 lg:gap-x-22 md:gap-y-8 gap-y-7">
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-lg md:radio-xl theme-controller radio-primary"
          value="corporate"
          checked={theme === "corporate"}
          onChange={() => setTheme("corporate")}
        />
        <span className="font-bold text-2xl">Corporate</span>
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-lg md:radio-xl theme-controller radio-primary"
          value="retro"
          checked={theme === "retro"}
          onChange={() => setTheme("retro")}
        />
        <span className="font-bold text-2xl">Retro</span>
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-lg md:radio-xl theme-controller radio-primary"
          value="cyberpunk"
          checked={theme === "cyberpunk"}
          onChange={() => setTheme("cyberpunk")}
        />
        <span className="font-bold text-2xl">Cyberpunk</span>
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-lg md:radio-xl theme-controller radio-primary"
          value="valentine"
          checked={theme === "valentine"}
          onChange={() => setTheme("valentine")}
        />
        <span className="font-bold text-2xl">Valentine</span>
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-lg md:radio-xl theme-controller radio-primary"
          value="aqua"
          checked={theme === "aqua"}
          onChange={() => setTheme("aqua")}
        />
        <span className="font-bold text-2xl">Aqua</span>
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-lg md:radio-xl theme-controller radio-primary"
          value="dark"
          checked={theme === "dark"}
          onChange={() => setTheme("dark")}
        />
        <span className="font-bold text-2xl">Dark</span>
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-lg md:radio-xl theme-controller radio-primary"
          value="black"
          checked={theme === "black"}
          onChange={() => setTheme("black")}
        />
        <span className="font-bold text-2xl">Black</span>
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-lg md:radio-xl theme-controller radio-primary"
          value="dim"
          checked={theme === "dim"}
          onChange={() => setTheme("dim")}
        />
        <span className="font-bold text-2xl">Dim</span>
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-lg md:radio-xl theme-controller radio-primary"
          value="light"
          checked={theme === "light"}
          onChange={() => setTheme("light")}
        />
        <span className="font-bold text-2xl">Light</span>
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-lg md:radio-xl theme-controller radio-primary"
          value="abyss"
          checked={theme === "abyss"}
          onChange={() => setTheme("abyss")}
        />
        <span className="font-bold text-2xl">Abyss</span>
      </label>
    </div>
  );
};

export default RadioGroup;
