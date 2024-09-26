import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
//import Kamal from "./Kamal.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Labs from "./components/Dashboards/Labs/Labs.jsx";
import Dashboard1 from "./components/Dashboards/Dashboard1/Dashboard1.jsx";
import Attendance from "./components/Dashboards/Attendance/Attendance.jsx";
import Courses from "./components/Dashboards/Courses/Courses.jsx";
import Assignments from "./components/Dashboards/Assignments/Assignments.jsx";
import Exams from "./components/Dashboards/Exams/Exams.jsx";
import Resources from "./components/Dashboards/Resources/Resources.jsx";
import Announcements from "./components/Dashboards/Announcements/Announcements.jsx";
import Calendar from "./components/Dashboards/Calendar/Calendar.jsx";
import Enquiry from "./components/Dashboards/Enquiry/Enquiry.jsx";
import Collegesite from "./components/Dashboards/Collegesite/Collegesite.jsx";
import Schedule from "./components/Dashboards/Schedule/Schedule.jsx";
import Experiments from "./components/Dashboards/Experiments/Experiments.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Dashboard1 />} />
      <Route path='schedule' element={<Schedule />} />
      <Route path='attendance' element={<Attendance />} />
      <Route path='courses' element={<Courses />} />
      <Route path='labs' element={<Labs />} />
      <Route path='assignments' element={<Assignments />} />
      <Route path='experiments' element={<Experiments />} />
      <Route path='exams' element={<Exams />} />
      <Route path='resources' element={<Resources />} />
      <Route path='announcements' element={<Announcements />} />
      <Route path='calendar' element={<Calendar />} />
      <Route path='enquiry' element={<Enquiry />} />
      <Route path='collegeSite' element={<Collegesite />} />
      {/* <Route path='' element={<} /> */}
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Kamal /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
