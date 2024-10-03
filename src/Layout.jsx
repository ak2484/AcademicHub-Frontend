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
        <div className='flex justify-center items-center w-full  bg-white-smoke '>
          <Outlet className='' />
        </div>
      </div>
    </>
  );
}
