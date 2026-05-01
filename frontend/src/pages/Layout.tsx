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

  return (
    <div className="flex flex-col h-screen">
      {/* HEADER */}
      <aside className="h-16 sm:h-20 bg-primary rounded-3xl shadow-xl mt-2 mx-2 flex items-center justify-center">
        <span className="font-bold text-lg sm:text-2xl lg:text-3xl">
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
                      flex w-full rounded-2xl mt-2 items-center gap-3 px-3 py-3
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

            <div className="h-16 bg-base-300 p-2 rounded-3xl mt-2 shadow-xl"></div>
          </div>

          {/* RIGHT PANEL */}
          <aside
            className="
              w-full lg:w-64
              bg-base-300 p-4 rounded-3xl shadow-xl
              min-h-0 overflow-auto
            "
          >
            Right panel
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Layout;
