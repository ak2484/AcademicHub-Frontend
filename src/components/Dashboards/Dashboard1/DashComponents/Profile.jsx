import React from "react";
import "./StudentProfile.css"; // Import CSS file

const StudentProfile = () => {
  return (
    <div className="container">

      {/* Main Content */}
      <main className="main-content">
        <div className="profile-card">
          {/* Profile Header */}
          <div className="profile-header">
            <img
              src="./src/assets/Akash.jpg"
              alt="Profile"
              className="profile-img"
            />
            <div className="profile-info">
              <h2>Akash Nahak</h2>
              <p>Student [VU4F2223034]</p>
              <p>Email: vu4f2223034@pvppcoe.ac.in</p>
              <p>
                Password: Last Changed At - 29/10/2024{" "}
                <button className="change-password-btn">Change Password</button>
              </p>
              <p>Department: Information Technology</p>
              <p>Institute: Vasantdada Patil Pratishthan's College of Engineering and Visual Arts</p>
            </div>
          </div>

          {/* Personal Details */}
          <div className="details-section">
            <h3>Personal Details</h3>
            <div className="details-grid">
              <p><strong>First Name:</strong> Akash</p>
              <p><strong>Last Name:</strong> Nahak</p>
              <p><strong>Father Name:</strong> Antaraymi</p>
              <p><strong>Mother Name:</strong> Sanjukta</p>
              <p><strong>Gender:</strong> Male</p>
              <p><strong>Mobile Number:</strong> 9321693636</p>
              <p><strong>Date of Birth:</strong> 24/08/2004</p>
              <p><strong>Address:</strong> Lamba Wala Address</p>
              <p><strong>City:</strong> Mumbai</p>
              <p><strong>State:</strong> Maharashtra</p>
              <p><strong>Country:</strong> India</p>
              <p><strong>Pincode:</strong> 400025</p>
            </div>
          </div>

          {/* Other Details */}
          <div className="details-section">
            <h3>Other Details</h3>
            <div className="details-grid">
              <p><strong>ID:</strong> VU4F2223034</p>
              <p><strong>Enrollment Date:</strong> 09/11/2022</p>
              <p><strong>Year:</strong> 3</p>
              <p><strong>Semester:</strong> 5</p>
              <p><strong>Division:</strong> TE IT Division A</p>
              <p><strong>Batch:</strong> TE IT Batch B</p>
              <p><strong>Department:</strong> Information Technology</p>
              <p><strong>Institute:</strong> Vasantdada Patil Pratishthan's College of Engineering and Visual Arts</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentProfile;
