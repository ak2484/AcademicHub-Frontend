import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import DashNavBar from "../components/Dashboards/DashNavBar/DashNavBar";
import SideBar from "../components/Dashboards/SideBar/SideBar";

export default function Layout() {
  const location = useLocation();
  const isDashboardPage = location.pathname.startsWith("/layout");

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Navbar */}
      <div className='sticky top-0 z-10'>
        <DashNavBar />
      </div>

      {/* Main Content */}
      <div className='flex flex-1 h-max sticky left-0 '>
        {/* Sidebar */}
        <SideBar />

        {/* Page Content */}
        <div
          className={`flex w-full bg-white-smoke ${
            isDashboardPage
              ? "justify-center items-center"
              : "justify-center items-center"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
