// import React from "react";
// import StudentGreeting from "./DashComponents/StudentGreeting";
// import StudentProgress from "./DashComponents/StudentProgress";
// import AttendancePieChart from "./DashComponents/AttendancePieChart";

// export default function Dashboard1() {
//   const studentName = "Akash Nahak";
//   const studentImageUrl = "./src/assets/Akash.jpg";
//   return (
//     <div className='flex'>
//       <div className=''>
//         <StudentGreeting name={studentName} imageUrl={studentImageUrl} />

//         <div className='flex w-full '>
//           <StudentProgress />
//           <AttendancePieChart presentDays={75} totalDays={100} />
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { FaBookOpen, FaTasks, FaChartLine, FaBullhorn } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../constants";

const Dashboard1 = () => {
  const attendancePercentage = 63;
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const fetchNavData = async () => {
    try {
      const res = await axios.get(`${API_URL}/dashboard`, {
        withCredentials: true,
      });

      if (res.data.dashboard.user) {
        console.log(res.data.dashboard.user);
        setUser(res.data.dashboard.user);
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
    fetchNavData();
  }, []);

  if (error) {
    return <p>Error: {error.message}</p>; // Display error message if any
  }

  if (!user) {
    return <p>Loading...</p>; // Display loading text until user is set
  }

  return (
    <div className="dashboard-container">
      {/* Main Content */}
      <main className="main-content">
        {/* Profile Header */}
        <div className="profile-card">
          <div className="profile-info">
            <img
              src="../src/assets/Akash.jpg"
              alt="Profile"
              className="profile-img"
            />
            <div>
              <h2>
                {user.firstName} {user.lastName}
              </h2>
              <p>
                ID: <strong>{user.instituteAllottedId}</strong>
              </p>
              <p>
                Year: <strong>{user.currentYear}</strong> | Sem:{" "}
                <strong>{user.currentSemester}</strong>
              </p>
              <p>
                Branch:{" "}
                <strong>{user.department ? user.department.name : "NA"}</strong>
              </p>
            </div>
          </div>
          <a href="/layout/profile" className="view-profile">
            View Profile &gt;
          </a>
        </div>

        {/* Cards Section */}
        <div className="dashboard-cards">
          {/* Attendance Card */}
          <div className="card attendance-card">
            <h3>Attendance</h3>
            <div className="progress-circle">
              <CircularProgressbar
                value={attendancePercentage}
                text={`${attendancePercentage}%`}
                styles={buildStyles({
                  textSize: "16px",
                  pathColor: `rgba(62, 152, 199, ${
                    attendancePercentage / 100
                  })`,
                  textColor: "#333",
                  trailColor: "#eee",
                  backgroundColor: "#fff",
                })}
              />
            </div>
          </div>

          {/* Overview Section */}
          <div className="card overview-card">
            <h3>Overview</h3>
            <div className="overview-items">
              <div className="overview-item">
                <FaBookOpen className="icon" />
                <div>
                  <p>Upcoming Lecture</p>
                  <strong>Internet Programming</strong>
                  <p>11:20 AM - 2:13 PM</p>
                </div>
              </div>

              <div className="overview-item">
                <FaTasks className="icon" />
                <div>
                  <p>Overdue Tasks</p>
                  <strong>3 - Assignments Pending</strong>
                </div>
              </div>

              <div className="overview-item">
                <FaChartLine className="icon" />
                <div>
                  <p>Current CGPA</p>
                  <strong>8.88</strong>
                  <p>i.e. 84.36%</p>
                </div>
              </div>

              <div className="overview-item">
                <FaBullhorn className="icon" />
                <div>
                  <p>Announcements</p>
                  <strong>2 - New Announcements</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard1;
