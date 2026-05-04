import type { JSX } from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "./layoutDecision";

const LayoutSidebar = (): JSX.Element => {
  return (
    <aside
      className="
        sticky top-0
        bg-base-300 rounded-3xl shadow-xl
        w-full h-16
        flex flex-row items-center
        overflow-x-auto
        lg:w-64 lg:h-full
        lg:flex-col lg:justify-center lg:overflow-y-auto
      "
    >
      <ul
        className="
          menu w-full
          flex flex-row items-center px-2
          gap-2
          lg:flex-col lg:gap-1
        "
      >
        {navItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <>
              <li key={item.name} className="flex-1 lg:w-full lg:mt-2">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `
                    flex rounded-2xl items-center gap-3 px-3 py-3
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
              </li>

              {/* DIVIDER — tylko na desktopie (pewna wersja) */}
              {item.divider && index !== navItems.length - 1 && (
                <div className="hidden lg:block w-full h-px bg-base-content/20 my-6.5" />
              )}
            </>
          );
        })}
      </ul>
    </aside>
  );
};

export default LayoutSidebar;
