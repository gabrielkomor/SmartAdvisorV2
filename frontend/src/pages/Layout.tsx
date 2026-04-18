import { type JSX } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = (): JSX.Element => {
  const navItems: Array<{ name: string; path: string }> = [
    { name: "Download Data", path: "/downloadData" },
    { name: "Candle Chart", path: "/candleChart" },
    { name: "Signals Hisotry", path: "/signalsHisotry" },
    { name: "Hisotry Decisions", path: "/hisotryDecisions" },
    { name: "Linear Decisions", path: "/linearDecisions" },
  ];

  return (
    <div className="flex flex-col h-screen">
      <aside className="w-100% h-20 bg-base-300 rounded-3xl shadow-xl mt-2 ml-2 mr-2 flex items-center justify-center">
        <span className="text-center font-bold text-3xl">Smart Advisor V2</span>
      </aside>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-15% bg-base-300 p-2 rounded-3xl ml-2 mt-2 mb-2 shadow-xl">
          <ul className="menu text-base-content">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={
                    "bg-primary text-primary-content rounded-field mt-1.5"
                  }
                >
                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </aside>

        <main className="flex-1 overflow-y-auto p-8 bg-base-300 rounded-3xl m-2 shadow-xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
