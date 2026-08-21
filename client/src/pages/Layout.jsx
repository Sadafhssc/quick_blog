import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import SidePanel from "../components/SidePanel";

const Layout = () => {
  return (
    <>
      <AdminHeader />

      <div className="d-flex flex-column flex-md-row">
        <SidePanel />

        <div className="flex-grow-1">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;