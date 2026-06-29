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
      <div className="flex flex-1 flex-col lg:flex-row gap-2 p-2 relative">
        {/* SIDEBAR */}
        <LayoutSidebar />

        {/* CONTENT */}
        <div className="flex flex-1 flex-col lg:flex-row gap-2">
          <div className="flex flex-col flex-1">
            <main
              className="
          flex-1
          p-4
          bg-base-300 rounded-3xl shadow-xl
          min-h-[70vh] lg:min-h-0
        "
            >
              <Outlet />
            </main>

            <LayoutBottomSummary />
          </div>

          <LayoutRightIndicators />
        </div>
      </div>
    </div>
  );
};

export default Layout;
