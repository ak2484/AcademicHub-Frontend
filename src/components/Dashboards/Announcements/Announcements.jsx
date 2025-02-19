import React, { useState } from "react";
import AnnouncementList from "./AnnouncementList";
import AnnouncementForm from "./AnnouncementsForm";

export default function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Handle new announcements
  const handleAnnouncementSubmit = (newAnnouncement) => {
    setAnnouncements([newAnnouncement, ...announcements]);
  };

  // Open/Close form
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className="flex flex-col items-center text-center p-6 md:p-12 bg-white-smoke min-h-screen">
      {/* Announcement List Section */}
      <div className="w-full max-w-7xl">
        <AnnouncementList announcements={announcements} />
      </div>

      {/* Button for opening the form */}
      <div className="mt-6">
        <button
          onClick={openForm}
          className="px-6 py-3 rounded-full bg-palatinate-blue text-white-smoke text-lg 
                     font-semibold hover:bg-indigo-700 transition-colors"
        >
          Make Announcement
        </button>
      </div>

      {/* Announcement Form Modal (Responsive) */}
      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-xl md:text-2xl font-bold mb-4">New Announcement</h2>
            <AnnouncementForm
              handleAnnouncementSubmit={handleAnnouncementSubmit}
              onCancel={closeForm}
            />
          </div>
        </div>
      )}
    </div>
  );
}
