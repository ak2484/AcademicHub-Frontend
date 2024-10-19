import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DashNavBar from "./components/Dashboards/DashNavBar/DashNavBar";
import SideBar from "./components/Dashboards/SideBar/SideBar";
import ErrorPage from "./Error/ErrorPage";
import axios from "axios";
import { API_URL } from "./constants";

export default function Layout() {
  const isLoggedIn = false;
  // const [activePage, setActivePage] = useState("LandingPage");
  const activePage = "LandingPage";
  const location = useLocation();
  const isRoutedToMyComponent = location.pathname === "/layout";

  return (
    <>
      <div className="sticky top-0 z-10">
        <DashNavBar />
      </div>
      <div className="flex w-full">
        <SideBar />
        {isRoutedToMyComponent ? (
          <div className="flex w-full bg-white-smoke ">
            <Outlet />
          </div>
        ) : (
          <div className="flex justify-center items-center w-full  bg-white-smoke ">
            <Outlet />
          </div>
        )}
      </div>
    </>
  );
}
