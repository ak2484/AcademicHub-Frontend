import React from "react";

import { Outlet } from "react-router-dom";
import DashNavBar from "./components/Dashboards/DashNavBar/DashNavBar";
import SideBar from "./components/Dashboards/SideBar/SideBar";

export default function Layout() {
  return (
    <>
      <DashNavBar />
      <div className='flex'>
        <SideBar />
        <div className='text-4xl'>
          <Outlet />
        </div>
      </div>
    </>
  );
}
