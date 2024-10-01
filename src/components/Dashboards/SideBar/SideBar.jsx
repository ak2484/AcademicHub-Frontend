import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function SideBar() {
  let Focus = {};
  const activeStyle = " text-dark-imperial-blue font-medium";
  return (
    <>
      <div className='flex-col bg-white-smoke'>
        <div className='text-sans text-[22px] text-palatinate-blue '>
          {/* <h2 className='font-bold bg-jordy-blue text-dark-imperial-blue px-6 py-3 sticky top-0 w-64 shadow-full'>
          Dashboard
        </h2> */}
          <div className='sticky top-0 h-screen w-64 p-6 shadow-lg bg-lavender-web'>
            <h2 className='space-y-4 font-bold'>My Desk</h2>
            <ul className='px-3'>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded'>
                <div className=''>
                  <NavLink
                    to=''
                    className={({ isActive }) =>
                      `${isActive ? activeStyle : ""}`
                    }
                  >
                    Dashboard
                  </NavLink>
                </div>
              </li>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded'>
                <NavLink
                  to='schedule'
                  className={({ isActive }) => `${isActive ? activeStyle : ""}`}
                >
                  Schedule
                </NavLink>
              </li>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded'>
                <NavLink
                  to='attendance'
                  className={({ isActive }) => `${isActive ? activeStyle : ""}`}
                >
                  Attendance
                </NavLink>
              </li>
            </ul>
            <h2 className='space-y-6 font-bold'>Academics</h2>
            <ul className='px-3'>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded space-x-6 '>
                <NavLink
                  to='courses'
                  className={({ isActive }) => `${isActive ? activeStyle : ""}`}
                >
                  Courses
                </NavLink>
              </li>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded'>
                <NavLink
                  to='labs'
                  className={({ isActive }) => `${isActive ? activeStyle : ""}`}
                >
                  Labs
                </NavLink>
              </li>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded'>
                <NavLink
                  to='assignments'
                  className={({ isActive }) => `${isActive ? activeStyle : ""}`}
                >
                  Assignments
                </NavLink>
              </li>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded'>
                <NavLink
                  to='experiments'
                  className={({ isActive }) => `${isActive ? activeStyle : ""}`}
                >
                  Experiments
                </NavLink>
              </li>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 powder-blue'>
                <NavLink
                  to='exams'
                  className={({ isActive }) => `${isActive ? activeStyle : ""}`}
                >
                  Exams
                </NavLink>
              </li>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded'>
                <NavLink
                  to='resources'
                  className={({ isActive }) => `${isActive ? activeStyle : ""}`}
                >
                  Resources
                </NavLink>
              </li>
            </ul>

            <h2 className='space-y-6 font-bold py-'>Institute</h2>
            <ul className='px-3'>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded space-x-6'>
                <NavLink
                  to='announcements'
                  className={({ isActive }) => `${isActive ? activeStyle : ""}`}
                >
                  Announcements
                </NavLink>
              </li>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded'>
                <NavLink
                  to='calendar'
                  className={({ isActive }) => `${isActive ? activeStyle : ""}`}
                >
                  Calendar
                </NavLink>
              </li>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded'>
                <NavLink
                  to='enquiry'
                  className={({ isActive }) => `${isActive ? activeStyle : ""}`}
                >
                  Enquiry
                </NavLink>
              </li>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded'>
                <NavLink
                  to='https://pvppcoe.ac.in/'
                  className={({ isActive }) => `${isActive ? activeStyle : ""}`}
                >
                  College site
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
