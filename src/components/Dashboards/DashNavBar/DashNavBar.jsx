import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../constants";
import { NavLink } from "react-router-dom";

export default function DashNavBar() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const fetchDashboardData = async () => {
    try {
      const res = await axios.get(`${API_URL}/dashboard`, {
        withCredentials: true,
      });

      if (res.data.data.user) {
        console.log(res.data.data.user);
        setUser(res.data.data.user);
      } else {
        setError({
          message: "User not found!",
        });
      }
    } catch (err) {
      if (err.response.status == 401) {
        setError({
          status: err.response.status,
          message: "You are not logged in!",
        });
      } else {
        setError({
          message: "Something went wrong!",
        });
      }
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <>
      <div className='flex-col bg-white-smoke'>
        <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-white-smoke text-smoky-black flex'>
          <div className='container px-4 mx-auto relative text-sm'>
            <div className='flex justify-between item-center'>
              <div className='flex items-center flex-shrink-0 '>
                <img
                  className='h-12 w-auto mr-2 '
                  src='./src/assets/AcademicHubLogo2.png'
                  alt='logo'
                />
              </div>
              {error ? (
                <div className=' hidden lg:flex justify-center space-x-4 items-center font-sans text-[20px]'>
                  <span>{error.message}</span>
                  {error.status == 401 ? (
                    <button href='#' className='py-3 px-3 border rounded-full'>
                      <NavLink to='/loginForm'>Login</NavLink>
                    </button>
                  ) : (
                    <div></div>
                  )}
                </div>
              ) : (
                <div>
                  {user ? (
                    <div className=' hidden lg:flex justify-center space-x-4 items-center font-sans text-[20px]'>
                      <span>{user.userType}</span>
                      <span>@{user.institute.nameAcronym}</span>
                      <button
                        href='#'
                        className='py-3 px-3 border rounded-full'
                      >
                        {user.firstName} {user.lastName}
                      </button>
                    </div>
                  ) : (
                    <div className=' hidden lg:flex justify-center space-x-4 items-center font-sans text-[20px]'>
                      Fetching of user failed
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
