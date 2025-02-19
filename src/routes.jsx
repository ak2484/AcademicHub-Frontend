import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App.jsx";
import Layout from "./layouts/Layout";
import Dashboard1 from "./components/Dashboards/Dashboard1/Dashboard1.jsx"; 
import AttendanceForm from "./components/Dashboards/Attendance/Attendance.jsx";
import LabForm from "./components/Dashboards/Labs/Labs.jsx";
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
import LandingPage from "./pages/LandingPage.jsx";
import LoginForm from "./components/Forms/AuthorizationForms/LoginForm.jsx";
import EnrollForm from "./components/Forms/AuthorizationForms/EnrollForm.jsx";
import Chatbot from "./chat/Chatbot.jsx";
// import Layout from "./layouts/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<LandingPage />} />
      <Route path="loginForm" element={<LoginForm />} />
      <Route path="layout" element={<Layout />}>
      <Route path="chat" element={<Chatbot />} />

        <Route index element={<Dashboard1 />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="attendance" element={<AttendanceForm students={[
          { id: 1, name: "John Doe" },
          { id: 2, name: "Jane Smith" },
          { id: 3, name: "Alice Johnson" },
          { id: 4, name: "Bob Brown" }
        ]} />} />
        
        <Route path="courses" element={<CourseForm departments={["CSE", "Mechanical", "Electrical"]} teachers={["Mr. Smith", "Ms. Johnson", "Dr. Brown"]} />} />
        <Route path="labs" element={<LabForm courses={["CS 101", "Physics 201"]} departments={["CSE", "Mechanical"]} teachers={["Mr. Smith", "Ms. Johnson"]} labAssistants={["John Doe", "Jane Roe"]} />} />
        <Route path="assignments" element={<AssignmentForm courses={["Math 101", "Physics 202"]} labs={["Physics Lab", "Chemistry Lab"]} />} />
        <Route path="experiments" element={<ExperimentForm labs={["Physics Lab", "Chemistry Lab"]} />} />
        <Route path="exams" element={<Exams courses={["Math 101", "Physics 202"]} labs={["Physics Lab", "Chemistry Lab"]} />} />
        <Route path="resources" element={<ResourceForm courses={["Math 101", "Physics 201"]} labs={["Physics Lab", "Chemistry Lab"]} users={["Professor John", "Dr. Smith"]} />} />
        <Route path="announcements" element={<Announcements />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="enquiry" element={<Enquiry />} />
        <Route path="collegeSite" element={<Collegesite />} />
        <Route path="enrollForm" element={<EnrollForm />} />
      </Route>
    </Route>
  )
);

export default router;
