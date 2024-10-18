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
    userType: "Admin",
    firstName: "Rutvik",
    lastName: "Gondekar",
    institute: {
      nameAcronym: "VPPCOE",
    },
  });
  const [error, setError] = useState(null);

  const fetchDashboardData = async () => {
    try {
      const res = await axios.get(`${API_URL}/dashboard`, {
        withCredentials: true,
      });
      console.log(res);
      // if (user) {
      //   console.log(user);
      //   setUser(user);
      // } else {
      //   console.error("User data not found in response.");
      // }
    } catch (err) {
      if (err.response) {
        // Client received an error response (5xx, 4xx)
        console.error("Error Response:", err.response.data);
        setError(err.response.data.message || "An error occurred");
      } else if (err.request) {
        // Client never received a response, or request never left
        console.error("Network Error:", err.request);
        setError("Network error. Please try again.");
      } else {
        // Anything else
        console.error("Error:", err.message);
        setError(err.message || "An unexpected error occurred");
      }
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <>
      <div className="sticky top-0 z-10">
        <DashNavBar user={user} />
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
