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

  const [user, setUser] = useState({
    userType: "Student",
    firstName: "Rutvik",
    lastName: "Gondekar",
    institute: {
      nameAcronym: "VPPCOE",
    },
  });

  const fetchDashboardData = async () => {
    try {
      const res = await axios.get(`${API_URL}/dashboard`);
      if (res.data.data.user) {
        console.log(res.data.data.user);
        setUser(res.data.data.user);
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <>
      <div className='sticky top-0 z-10'>
        <DashNavBar user={user} />
      </div>
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
