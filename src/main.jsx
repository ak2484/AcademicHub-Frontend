import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Kamal from "./Kamal.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import LabForm from "./components/Dashboards/Labs/Labs.jsx";
import Dashboard1 from "./components/Dashboards/Dashboard1/Dashboard1.jsx";
import Attendance from "./components/Dashboards/Attendance/Attendance.jsx";
// import Courses from "./components/Dashboards/Courses/Courses.jsx";
import AssignmentForm from "./components/Dashboards/Assignments/Assignments.jsx";
import Exams from "./components/Dashboards/Exams/Exams.jsx";
import ResourceForm from "./components/Dashboards/Resources/Resources.jsx";
import Announcements from "./components/Dashboards/Announcements/Announcements.jsx";
import Calendar from "./components/Dashboards/Calendar/Calendar.jsx";
import Enquiry from "./components/Dashboards/Enquiry/Enquiry.jsx";
import Collegesite from "./components/Dashboards/Collegesite/Collegesite.jsx";
import Schedule from "./components/Dashboards/Schedule/Schedule.jsx";
import ExperimentForm from "./components/Dashboards/Experiments/Experiments.jsx";
import CourseForm from "./components/Dashboards/Courses/Courses.jsx";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Dashboard1 />} />
      <Route path='schedule' element={<Schedule />} />
      <Route path='attendance' element={<Attendance />} />
      <Route path='courses' element={<CourseForm 
      departments={["Computer Science", "Mechanical", "Electrical"]}
        teachers={["Mr. Smith", "Ms. Johnson", "Dr. Brown"]} />} />

      <Route path='labs' element={ <LabForm
        courses={["Computer Science 101", "Physics 201", "Chemistry 301"]}
        departments={["Computer Science", "Mechanical", "Electrical"]}
        teachers={["Mr. Smith", "Ms. Johnson", "Dr. Brown"]}
        labAssistants={["John Doe", "Jane Roe", "Sam Smith"]}
      />} />
      
      <Route path='assignments' element={<AssignmentForm courses={['Math 101', 'Physics 202', 'Chemistry 303']} labs={['Physics Lab', 'Chemistry Lab', 'Biology Lab']} />} />
      <Route path='experiments' element={<ExperimentForm labs={['Physics Lab', 'Chemistry Lab', 'Biology Lab']} />} />
      <Route path='exams' element={<Exams 
      courses={["Math 101", "Physics 202", "Chemistry 303"]}
      labs={["Physics Lab", "Chemistry Lab", "Biology Lab"]} />} />

      <Route path='resources' element={<ResourceForm
  courses={['Math 101', 'Physics 201']}
  labs={['Physics Lab', 'Chemistry Lab']}
  users={['Professor John', 'Dr. Smith', 'TA Alice']}
/>} />
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
