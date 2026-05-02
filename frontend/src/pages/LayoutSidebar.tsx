import type { JSX } from "react";
import { NavLink } from "react-router-dom";
import {
  CloudDownload,
  BarChart3,
  Signal,
  History,
  LineChart,
  LogOut,
  type LucideIcon,
} from "lucide-react";

type NavItems = Array<{
  name: string;
  path: string;
  icon: LucideIcon;
  divider: boolean;
}>;

const navItems: NavItems = [
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

const LayoutSidebar = (): JSX.Element => {
  return (
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
  );
};

export default LayoutSidebar;
