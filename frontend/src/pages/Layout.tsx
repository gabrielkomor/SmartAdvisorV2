import { type JSX } from "react";
import { Outlet } from "react-router-dom";

import LayoutHeader from "./LayoutHeader";
import LayoutSidebar from "./LayoutSidebar";
import LayoutBottomSummary from "./LayoutBottomSummary";
import LayoutRightIndicators from "./LayoutRightIndicators";

const Layout = (): JSX.Element => {
  return (
    <div className="flex flex-col h-screen">
      {/* HEADER */}
      <LayoutHeader />

      {/* BODY */}
      <div className="flex flex-1 min-h-0 flex-row gap-2 p-2 relative">
        {/* SIDEBAR */}
        <LayoutSidebar />

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
            <LayoutBottomSummary />
          </div>

          {/* RIGHT PANEL */}
          <LayoutRightIndicators />
        </div>
      </div>
    </div>
  );
};

export default Layout;
