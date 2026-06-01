import { NavLink } from "react-router-dom";

import "./SidebarLink.css";

interface SidebarLinkProps {
  sportAbbrev: string;
}

const SidebarLink = (props: SidebarLinkProps) => {
  return (
    <NavLink className="sidebar-link" to={`/${props.sportAbbrev.toLowerCase()}`}>
      {props.sportAbbrev}
    </NavLink>
  );
};

export default SidebarLink;
