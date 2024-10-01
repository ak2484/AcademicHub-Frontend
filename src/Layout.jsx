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
        <div className=' flex items-center justify-center w-full bg-white-smoke'>
          <Outlet />
        </div>
      </div>
    </>
  );
}
