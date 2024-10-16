import React, { useState } from "react";
import AnnouncementList from "./AnnouncementList";
import { NavLink } from "react-router-dom";
import AnnouncementForm from "./AnnouncementsForm";
import AnnouncementCard from "./AnnouncementCard";

export default function Announcements() {
  const [announcements, setAnnouncements] = useState([]);

  const handleAnnouncementSubmit = (newAnnouncement) => {
    setAnnouncements([newAnnouncement, ...announcements]);
  };

  const [isFormOpen, setIsFormOpen] = useState(false);

  const addCard = (announcements) => {
    const newCard = { ...announcements, id: Date.now() };
    setCards([...announcements, newCard]);
    setIsFormOpen(false);
  };

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };
  return (
    <div className='flex-col justify-center text-center p-8 bg-white-smoke'>
      <div className='flex-col pb-4 bg-white-smoke w-'>
        <AnnouncementList announcements={announcements} />
      </div>
      <div>
        <button
          onClick={openForm}
          className='border px-6 py-2 rounded-full bg-palatinate-blue text-white-smoke'
        >
          Make Announcement
        </button>
      </div>
      {isFormOpen && (
        <AnnouncementForm
          handleAnnouncementSubmit={handleAnnouncementSubmit}
          onAdd={addCard}
          onCancel={closeForm}
        />
      )}
    </div>
  );
}
