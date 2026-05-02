import { type JSX } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  CloudDownload,
  BarChart3,
  Signal,
  History,
  LineChart,
  LogOut,
  type LucideIcon,
} from "lucide-react";

const Layout = (): JSX.Element => {
  const navItems: Array<{
    name: string;
    path: string;
    icon: LucideIcon;
    divider: boolean;
  }> = [
    {
      name: "Download Data",
      path: "/downloadData",
      icon: CloudDownload,
      divider: true,
    },
    {
      name: "Candle Chart",
      path: "/candleChart",
      icon: BarChart3,
      divider: true,
    },
    {
      name: "Signals History",
      path: "/signalsHistory",
      icon: Signal,
      divider: true,
    },
    {
      name: "History Decisions",
      path: "/historyDecisions",
      icon: History,
      divider: true,
    },
    {
      name: "Linear Decisions",
      path: "/linearDecisions",
      icon: LineChart,
      divider: true,
    },
    { name: "Exit Application", path: "/", icon: LogOut, divider: false },
  ];

  const indicators: Array<{ name: string; value: Decision }> = [
    { name: "SMA", value: "BUY" },
    { name: "RSI", value: "HOLD" },
    { name: "BB", value: "HOLD" },
    { name: "MACD", value: "HOLD" },
    { name: "ADX", value: "BUY" },
    { name: "Volume", value: "SELL" },
  ];

  const summary: Array<{ name: string; value: Decision }> = [
    { name: "Additive", value: "HOLD" },
    { name: "Majority", value: "BUY" },
    { name: "Median", value: "BUY" },
  ];

  type Decision = "BUY" | "SELL" | "HOLD";

  const decisionColor = (value: Decision) => {
    switch (value) {
      case "BUY":
        return "btn-success text-white";
      case "SELL":
        return "btn-error text-white";
      case "HOLD":
        return "btn-warning text-black";
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* HEADER */}
      <aside className="h-16 sm:h-20 bg-primary rounded-3xl shadow-xl mt-2 mx-2 flex items-center justify-center">
        <span className="font-bold text-lg sm:text-2xl lg:text-3xl text-primary-content">
          Smart Advisor V2
        </span>
      </aside>

      {/* BODY */}
      <div className="flex flex-1 min-h-0 flex-row gap-2 p-2 relative">
        {/* SIDEBAR */}
        <aside
          className="
    sticky top-0
    h-full
    w-20 sm:w-56 lg:w-64
    bg-base-300 p-2 rounded-3xl shadow-xl
    flex flex-col
    justify-center
    overflow-y-auto
  "
        >
          <ul className="menu w-full flex flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.name} className="w-full">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `
                      flex w-full rounded-2xl mt-2 items-center gap-3 px-3 py-3 lg:h-14.5
                      transition-all duration-200 ease-out
                      active:scale-95 font-medium
                      text-sm lg:text-base
                      justify-center lg:justify-start shadow-xl
                      ${
                        isActive
                          ? "bg-secondary/50 text-primary-content"
                          : "bg-primary text-primary-content hover:bg-secondary/50"
                      }
                    `}
                  >
                    <Icon className="w-6 h-6 shrink-0" />
                    <span className="hidden lg:inline">{item.name}</span>
                  </NavLink>

                  {item.divider && (
                    <div className="divider divider-start pointer-events-none"></div>
                  )}
                </li>
              );
            })}
          </ul>
        </aside>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col lg:flex-row min-h-0 gap-2">
          {/* MAIN */}
          <div className="flex flex-col flex-1 min-h-0">
            <main
              className="
                flex-1 min-h-0
                p-4 sm:p-6 lg:p-8
                bg-base-300 rounded-3xl shadow-xl
                overflow-auto
              "
            >
              <Outlet />
            </main>

            {/* BOTTOM PANEL */}
            <div className="flex h-28 w-full items-center bg-base-300 p-2 md:p-1 lg:p-1 rounded-3xl mt-2 shadow-xl overflow-hidden">
              <ul className="grid h-full w-full grid-cols-3 gap-2 sm:gap-3 lg:gap-4 sm:pd-1 md:p-2 lg:p-3">
                {summary.map(({ name, value }) => (
                  <li
                    key={name}
                    className="flex w-full flex-col items-center gap-2 rounded-2xl bg-base-200 px-3 py-3 shadow-2xs sm:flex-row sm:gap-0"
                  >
                    <span className="w-full text-center font-semibold text-sm sm:flex-1 sm:text-base lg:text-xl">
                      {name}
                    </span>
                    <button
                      className={`btn w-full rounded-2xl shrink-0 btn-active
                        sm:w-1/2 font-bold lg:text-xl md:text-lg sm:text-sm cursor-default shadow-xl
                        h-10! sm:h-12! md:h-14! lg:h-15!
                        min-h-10! sm:min-h-12! md:min-h-14! lg:min-h-15!
                        ${decisionColor(value)}`}
                    >
                      {value}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <aside
            className="
              w-full lg:w-64
              bg-base-300 p-4 rounded-3xl shadow-xl
              min-h-0 max-h-28 sm:max-h-40 lg:max-h-none
              overflow-y-auto overflow-x-hidden
              flex flex-col justify-start lg:justify-center
            "
          >
            <ul className="flex w-full flex-row flex-wrap content-start gap-2 lg:flex-col lg:flex-nowrap lg:gap-0">
              {indicators.map(({ name, value }) => (
                <li className="w-full sm:w-[calc(50%-0.25rem)] lg:w-full lg:mt-4 rounded-2xl bg-base-200 shadow-2xs p-1">
                  <div className="flex w-full items-center gap-2 sm:pd-2 md:p-2.5 lg:p-3">
                    <span className="flex-1 text-center font-bold sm:text-sm md:test-xl lg:text-2xl">
                      {name}
                    </span>
                    <button
                      className={`btn btn-active rounded-2xl sm:text-xs md:test-sm lg:text-xl font-bold cursor-default w-1/2 sm:h-8 md:h-12 lg:h-16 shrink-0 shadow-xl ${decisionColor(value)}`}
                    >
                      {value}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Layout;
