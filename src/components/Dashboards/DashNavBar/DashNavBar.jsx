import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../constants";

export default function DashNavBar() {
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
      if (res.data.data.user) {
        console.log(res.data.data.user);
        setUser(res.data.data.user);
      } else {
        console.error("User data not found in response.");
      }
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
      <div className="flex-col bg-white-smoke">
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-white-smoke text-smoky-black flex">
          <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between item-center">
              <div className="flex items-center flex-shrink-0 ">
                <img
                  className="h-12 w-auto mr-2 "
                  src="./src/assets/AcademicHubLogo2.png"
                  alt="logo"
                />
              </div>
              <div className=" hidden lg:flex justify-cneter space-x-4 items-center font-sans text-[20px]">
                <span>{user.userType || "Student"}</span>
                <span>@{user.institute.nameAcronym || "VPPCOE"}</span>
                <button href="#" className="py-3 px-3 border rounded-full">
                  {user.firstName || "Rutvik"} {user.lastName || "Gondekar"}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
