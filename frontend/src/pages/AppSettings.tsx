import type { JSX } from "react";
import { useAppStore } from "../store/useAppStrore";

export const AppSettings = (): JSX.Element => {
  const theme = useAppStore((state) => state.theme);
  const setTheme = useAppStore((state) => state.setTheme);

  return (
    <fieldset className="fieldset">
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-sm theme-controller radio-primary"
          value="corporate"
          checked={theme === "corporate"}
          onChange={() => setTheme("corporate")}
        />
        Corporate
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-sm theme-controller radio-primary"
          value="retro"
          checked={theme === "retro"}
          onChange={() => setTheme("retro")}
        />
        Retro
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-sm theme-controller radio-primary"
          value="cyberpunk"
          checked={theme === "cyberpunk"}
          onChange={() => setTheme("cyberpunk")}
        />
        Cyberpunk
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-sm theme-controller radio-primary"
          value="valentine"
          checked={theme === "valentine"}
          onChange={() => setTheme("valentine")}
        />
        Valentine
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-sm theme-controller radio-primary"
          value="aqua"
          checked={theme === "aqua"}
          onChange={() => setTheme("aqua")}
        />
        Aqua
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-sm theme-controller radio-primary"
          value="dark"
          checked={theme === "dark"}
          onChange={() => setTheme("dark")}
        />
        Dark
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-sm theme-controller radio-primary"
          value="black"
          checked={theme === "black"}
          onChange={() => setTheme("black")}
        />
        Black
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-sm theme-controller radio-primary"
          value="dim"
          checked={theme === "dim"}
          onChange={() => setTheme("dim")}
        />
        Dim
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-sm theme-controller radio-primary"
          value="light"
          checked={theme === "light"}
          onChange={() => setTheme("light")}
        />
        Light
      </label>
    </fieldset>
  );
};

export default AppSettings;
