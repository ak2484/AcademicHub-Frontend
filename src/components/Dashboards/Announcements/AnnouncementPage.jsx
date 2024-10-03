import React, { useState } from "react";
import AnnouncementForm from "./Announcements";
import AnnouncementList from "./AnnouncementList";

const AnnouncementPage = () => {
  const [announcements, setAnnouncements] = useState([]);

  const handleAnnouncementSubmit = (newAnnouncement) => {
    setAnnouncements([newAnnouncement, ...announcements]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Announcement Form */}
      <AnnouncementForm handleAnnouncementSubmit={handleAnnouncementSubmit} />

      {/* Announcement List */}
      <div className="mt-10 w-full">
        <AnnouncementList announcements={announcements} />
      </div>
    </div>
  );
};

export default AnnouncementPage;
