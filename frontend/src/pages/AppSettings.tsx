import type { JSX } from "react";

export const AppSettings = (): JSX.Element => {
  return (
    <fieldset className="fieldset">
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-sm theme-controller radio-primary"
          value="corporate"
        />
        Corporate
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-sm theme-controller radio-primary"
          value="retro"
        />
        Retro
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-sm theme-controller radio-primary"
          value="cyberpunk"
        />
        Cyberpunk
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-sm theme-controller radio-primary"
          value="valentine"
        />
        Valentine
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-sm theme-controller radio-primary"
          value="aqua"
        />
        Aqua
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-sm theme-controller radio-primary"
          value="dark"
        />
        Dark
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-sm theme-controller radio-primary"
          value="black"
        />
        Black
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-sm theme-controller radio-primary"
          value="dim"
        />
        Dim
      </label>
      <label className="flex gap-2 cursor-pointer items-center">
        <input
          type="radio"
          name="theme-radios"
          className="radio radio-sm theme-controller radio-primary"
          value="light"
        />
        Light
      </label>
    </fieldset>
  );
};

export default AppSettings;
