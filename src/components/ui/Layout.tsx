import { Outlet } from "react-router-dom";

import './css/Layout.css'
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="container">
      <Sidebar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
