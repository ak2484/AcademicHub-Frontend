import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const activeStyle = "text-dark-imperial-blue font-medium";

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-lg shadow-lg"
        onClick={toggleSidebar}
      >
        {isOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
      </button>

      {/* Sidebar Container */}
      <div
        className={`fixed md:static top-0 left-0 h-screen w-64 bg-lavender-web p-6 shadow-lg transition-transform md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-40`}
      >
        <h2 className="text-xl font-bold text-palatinate-blue mb-4">My Desk</h2>

        <ul className="space-y-2">
          <li>
            <NavLink
              to="/layout/dashboard"
              className={({ isActive }) => `${isActive ? activeStyle : ""}`}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/layout/schedule"
              className={({ isActive }) => `${isActive ? activeStyle : ""}`}
            >
              Schedule
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/layout/attendance"
              className={({ isActive }) => `${isActive ? activeStyle : ""}`}
            >
              Attendance
            </NavLink>
          </li>
        </ul>

        <h2 className="text-xl font-bold mt-6 text-palatinate-blue">Academics</h2>
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/layout/courses"
              className={({ isActive }) => `${isActive ? activeStyle : ""}`}
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/layout/labs"
              className={({ isActive }) => `${isActive ? activeStyle : ""}`}
            >
              Labs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/layout/assignments"
              className={({ isActive }) => `${isActive ? activeStyle : ""}`}
            >
              Assignments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/layout/experiments"
              className={({ isActive }) => `${isActive ? activeStyle : ""}`}
            >
              Experiments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/layout/exams"
              className={({ isActive }) => `${isActive ? activeStyle : ""}`}
            >
              Exams
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/layout/resources"
              className={({ isActive }) => `${isActive ? activeStyle : ""}`}
            >
              Resources
            </NavLink>
          </li>
        </ul>

        <h2 className="text-xl font-bold mt-6 text-palatinate-blue">Institute</h2>
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/layout/announcements"
              className={({ isActive }) => `${isActive ? activeStyle : ""}`}
            >
              Announcements
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/layout/calendar"
              className={({ isActive }) => `${isActive ? activeStyle : ""}`}
            >
              Calendar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/layout/enquiry"
              className={({ isActive }) => `${isActive ? activeStyle : ""}`}
            >
              Enquiry
            </NavLink>
          </li>
          <li>
            <a
              href="https://pvppcoe.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-powder-blue"
            >
              College Site
            </a>
          </li>
          <li>
            <NavLink
              to="/layout/chat"
              className={({ isActive }) => `${isActive ? activeStyle : ""}`}
            >
              Chat AI
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
