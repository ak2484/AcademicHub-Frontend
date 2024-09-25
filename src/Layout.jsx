import React from "react";
import StudentDashboard from "./components/Dashboards/StudentDashboard";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <StudentDashboard />
      <Outlet />
    </>
  );
}
