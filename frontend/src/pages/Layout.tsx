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
    {
      name: "Exit Application",
      path: "/",
      icon: LogOut,
      divider: false,
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      <aside className="w-100% h-[10%] bg-primary rounded-3xl shadow-xl mt-2 ml-2 mr-2 flex items-center justify-center">
        <span className="text-center font-bold text-3xl">Smart Advisor V2</span>
      </aside>

      <div className="flex overflow-hidden h-full">
        <aside className="w-[13%] bg-base-300 p-2 rounded-3xl ml-2 mt-2 mb-2 shadow-xl flex justify-center items-center">
          <ul className="menu text-base-content w-full">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.name} className="w-full">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `
  flex w-full rounded-2xl mt-2 h-13 items-center gap-2 px-3
  transition-all duration-200 ease-out
  active:scale-90
  ${
    isActive
      ? "bg-secondary/50 text-primary-content hover:bg-secondary/70 hover:text-black"
      : "bg-primary text-primary-content hover:bg-secondary/50 hover:text-black"
  }
`}
                  >
                    <Icon className="w-6 h-6" />
                    <span>{item.name}</span>
                  </NavLink>
                  {item.divider ? (
                    <div className="divider divider-start pointer-events-none"></div>
                  ) : (
                    <></>
                  )}
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
