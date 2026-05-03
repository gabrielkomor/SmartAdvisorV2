import type { JSX } from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "./layoutDecision";

const LayoutSidebar = (): JSX.Element => {
  return (
    <aside
      className="
sticky top-0
h-full
w-14 sm:w-56 lg:w-64
bg-base-300 sm:p-2 lg:p-2 rounded-3xl shadow-xl
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
                justify-center shadow-xl
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
