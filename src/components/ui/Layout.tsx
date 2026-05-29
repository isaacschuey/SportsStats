import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="container" style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ flex: 1, justifyContent: "center" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
