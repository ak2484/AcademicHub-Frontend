import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import DashNavBar from "./components/Dashboards/DashNavBar/DashNavBar";
import SideBar from "./components/Dashboards/SideBar/SideBar";

export default function Layout() {
  const location = useLocation();
  const isRoutedToMyComponent = location.pathname === "/";
  return (
    <>
      <DashNavBar />
      <div className='flex w-full'>
        <SideBar />
        {isRoutedToMyComponent ? (
          <div className='flex w-full bg-white-smoke '>
            <Outlet />
          </div>
        ) : (
          <div className='flex justify-center items-center w-full  bg-white-smoke '>
            <Outlet />
          </div>
        )}
      </div>
    </>
  );
}
