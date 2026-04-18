import { type JSX } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  CloudDownload,
  BarChart3,
  Signal,
  History,
  LineChart,
  type LucideIcon,
} from "lucide-react";

const Layout = (): JSX.Element => {
  const navItems: Array<{ name: string; path: string; icon: LucideIcon }> = [
    {
      name: "Download Data",
      path: "/downloadData",
      icon: CloudDownload,
    },
    {
      name: "Candle Chart",
      path: "/candleChart",
      icon: BarChart3,
    },
    {
      name: "Signals History",
      path: "/signalsHistory",
      icon: Signal,
    },
    {
      name: "History Decisions",
      path: "/historyDecisions",
      icon: History,
    },
    {
      name: "Linear Decisions",
      path: "/linearDecisions",
      icon: LineChart,
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      <aside className="w-100% h-[10%] bg-base-300 rounded-3xl shadow-xl mt-2 ml-2 mr-2 flex items-center justify-center">
        <span className="text-center font-bold text-3xl">Smart Advisor V2</span>
      </aside>

      <div className="flex overflow-hidden h-full">
        <aside className="w-[13%] bg-base-300 p-2 rounded-3xl ml-2 mt-2 mb-2 shadow-xl">
          <ul className="menu text-base-content w-full">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.name} className="w-full">
                  <NavLink
                    to={item.path}
                    className="flex w-full bg-primary text-primary-content rounded-field mt-1.5 h-13 items-center gap-2 px-3"
                  >
                    <Icon className="w-6 h-6" />
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </aside>

        <div className="flex flex-col w-[73%] mt-2 ml-2 mr-2">
          <main className="h-[90%] overflow-hidden p-8 bg-base-300 rounded-3xl shadow-xl">
            <Outlet />
          </main>

          <div className="h-[10%] bg-base-300 p-2 rounded-3xl mt-2 mb-2 shadow-xl"></div>
        </div>

        <aside className="w-[13%] bg-base-300 p-2 rounded-3xl mt-2 mb-2 mr-2 shadow-xl"></aside>
      </div>
    </div>
  );
};

export default Layout;
