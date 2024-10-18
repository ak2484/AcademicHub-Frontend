import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Outlet,
} from "react-router-dom"; // Import Router and Routes

import AdminDashboard from "./components/Dashboards/AdminDashboard.jsx";
import SystemAdminDashboard from "./components/Dashboards/SystemAdminDashboard.jsx";
import TeachingStaffDashboard from "./components/Dashboards/TeachingStaffDashboard.jsx";
import NonTeachingStaffDashboard from "./components/Dashboards/NonTeachingStaffDashboard.jsx";
import StudentDashboard from "./components/Dashboards/StudentDashboard.jsx";
import LandingPage from "./pages/LandingPage.jsx";

export default function App() {
  const location = useLocation();

  // Define a boolean that checks if the current path is the root ---> means Landing page will shown
  // const isLandingPageVisible = location.pathname === "/";

  return (
    <>
      <Outlet />
      {/* Conditionally render Landing Page components */}
      {/* {isLandingPageVisible && (
        <>
          <LandingPage />
        </>
      )} */}
      {/* Define Routes */}
      {/* <div>
        <Routes>
          {/* Remove this line if you don't have a Home component */}
      {/* <Route path="/home" element={<Home />} /> */}
      {/* <Route path="/login" element={<LoginForm />} />
          <Route path="/enroll" element={<EnrollForm />} />

          {/* RoleBased User Assign Karna ha logic k liye backend lagegaaa toh baad me karta hu*/}
      {/* <Route path="/system-admin" element={<SystemAdminDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/teaching-staff" element={<TeachingStaffDashboard />} />
          <Route
            path="/non-teaching-staff"
            element={<NonTeachingStaffDashboard />}
          />
          <Route path="/student" element={<StudentDashboard />} />
        </Routes>
      </div> */}
      {/* <LandingPage />  */}
    </>
  );
}

// Wrap App in Router for routing
// const MainApp = () => (
//   <Router>
//     <App />
//     <LandingPage />
//   </Router>
// );

// export default MainApp;
