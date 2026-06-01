import { NavLink } from "react-router-dom";

interface SidebarLinkProps {
  sportAbbrev: string;
}

const SidebarLink = (props: SidebarLinkProps) => {
  return <NavLink to={`/${props.sportAbbrev.toLowerCase()}`}>{props.sportAbbrev}</NavLink>;
};

export default SidebarLink;
