import { NavLink } from "react-router-dom";

import './css/Sidebar.css'

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/mlb"}>MLB</NavLink>
        <NavLink to={"/nba"}>NBA</NavLink>
        <NavLink to={"/nhl"}>NHL</NavLink>
    </aside>
  );
};

export default Sidebar;
