import { NavLink } from "react-router-dom";

import "./css/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>Sports Stats</h3>
      </div>
      <div className="sidebar-links">
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/mlb"}>MLB</NavLink>
        <NavLink to={"/nba"}>NBA</NavLink>
        <NavLink to={"/nhl"}>NHL</NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
