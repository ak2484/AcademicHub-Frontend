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
    <div className='bg-white-smoke flex-col justify-center text-center p-8 '>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 '>
        {cards.map((card) => (
          <AnnouncementCard
            key={card.id}
            title={card.title}
            content={card.content}
          />
        ))}
      </div>
      <div className=' container  gap-4 p-4  '>
        <AnnouncementList announcements={announcements} />
      </div>
      <div>
        <button
          onClick={openForm}
          className='border px-6 py-2 rounded-full bg-palatinate-blue text-white-smoke'
        >
          <NavLink to=''>Make Announcement</NavLink>
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
