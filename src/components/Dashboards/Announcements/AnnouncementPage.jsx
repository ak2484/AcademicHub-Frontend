import React, { useState } from "react";
import AnnouncementForm from "./Announcements"; // Ensure correct import for AnnouncementForm
import AnnouncementList from "./AnnouncementList";

const AnnouncementPage = () => {
  const [announcements, setAnnouncements] = useState([]);

  const handleAnnouncementSubmit = (newAnnouncement) => {
    setAnnouncements([newAnnouncement, ...announcements]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-row p-8">
      {/* Left Column - Announcement Form */}
      
      <div className="w-full md:w-3/3 p-4">
        <AnnouncementForm handleAnnouncementSubmit={handleAnnouncementSubmit} />
      </div>
  
      {/* Right Column - Announcement List */}
      <div className="w-full md:w-2/3 p-4">
        <AnnouncementList announcements={announcements} />
      </div>
    </div>
  );
};

export default AnnouncementPage;
