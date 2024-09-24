import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Import Router and Routes
import { Navbar, HeroSection, Footer } from './pages/LandingPage.jsx';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import SystemAdminDashboard from './components/Dashboard/SystemAdminDashboard';
import TeachingStaffDashboard from './components/Dashboard/TeachingStaffDashboard';
import NonTeachingStaffDashboard from './components/Dashboard/NonTeachingStaffDashboard';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import { EnrollForm, LoginForm } from './components/Forms/AuthorizationForms.jsx';

const App = () => {
  const location = useLocation();

  // Define a boolean that checks if the current path is the root ---> means Landing page will shown
  const isLandingPageVisible = location.pathname === '/';

  return (
    <>
      {/* Conditionally render Landing Page components */}
      {isLandingPageVisible && (
        <>
          <Navbar />
          <HeroSection />
          <Footer />
        </>
      )}
      
      {/* Define Routes */}
      <div>
        <Routes>
          {/* Remove this line if you don't have a Home component */}
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/enroll" element={<EnrollForm />} /> 

          {/* RoleBased User Assign Karna ha logic k liye backend lagegaaa toh baad me karta hu*/}
          <Route path="/system-admin" element={<SystemAdminDashboard />} /> 
          <Route path="/admin" element={<AdminDashboard />} /> 
          <Route path="/teaching-staff" element={<TeachingStaffDashboard />} /> 
          <Route path="/non-teaching-staff" element={<NonTeachingStaffDashboard />} /> 
          <Route path="/student" element={<StudentDashboard />} />
        </Routes>
      </div>
    </>
  );
};

// Wrap App in Router for routing
const MainApp = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;
