import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes"; // Import the router
import "./index.css"; // Import global styles
import SideBar from "./components/Dashboards/SideBar/SideBar";
import DashNavBar from "./components/Dashboards/DashNavBar/DashNavBar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <DashNavBar />
    <SideBar /> */}
    <RouterProvider router={router} /> {/* Provide the router */}
  </React.StrictMode>
);
