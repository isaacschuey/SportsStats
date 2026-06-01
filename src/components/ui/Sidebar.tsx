import "./css/Sidebar.css";
import SidebarLink from "./SidebarLink";

interface SidebarProps {
  sports: string[];
}

const Sidebar = (props: SidebarProps) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>Sports Stats</h3>
      </div>
      <div className="sidebar-links">
        <SidebarLink sportAbbrev="Home" />
        {props.sports.map((sport) => (
          <SidebarLink sportAbbrev={sport} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
