import type { JSX } from "react";
import { NavLink } from "react-router-dom";

const Menu = (): JSX.Element => {
  return (
    <div className="h-screen w-64 bg-base-200 p-4 mt-50">
      <ul className="menu text-base-content">
        <li className="bg-base-300">
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
