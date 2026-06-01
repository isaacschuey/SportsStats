import { Outlet } from "react-router-dom";

import "./css/Layout.css";
import Sidebar from "./Sidebar";

interface LayoutProps {
  sportAbbrevs: string[];
}

const Layout = (props: LayoutProps) => {
  return (
    <div className="container">
      <Sidebar sports={props.sportAbbrevs} />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
