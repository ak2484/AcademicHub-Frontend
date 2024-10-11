import React, { useState } from "react";
import AnnouncementList from "./AnnouncementList";
import { NavLink } from "react-router-dom";

export default function Announcements() {
  const [announcements, setAnnouncements] = useState([]);

  const handleAnnouncementSubmit = (newAnnouncement) => {
    setAnnouncements([newAnnouncement, ...announcements]);
  };
  return (
    <div className='bg-white-smoke flex-col justify-center text-center p-8 '>
      <div className=' flex justify-center p-4 bg-white-smoke  '>
        <AnnouncementList announcements={announcements} />
      </div>
      <div>
        <button className='border px-6 py-2 rounded-full bg-palatinate-blue text-white-smoke'>
          <NavLink to='announcementForm'>Make Announcement</NavLink>
        </button>
      </div>
    </div>
  );
}
