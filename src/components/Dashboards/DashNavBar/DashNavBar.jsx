import React from "react";

export default function DashNavBar({ user }) {
  return (
    <>
      <div className="flex-col bg-white-smoke">
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-white-smoke text-smoky-black flex">
          <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between item-center">
              <div className="flex items-center flex-shrink-0 ">
                <img
                  className="h-12 w-auto mr-2 "
                  src="./src/assets/AcademicHubLogo2.png"
                  alt="logo"
                />
              </div>
              <div className=" hidden lg:flex justify-cneter space-x-4 items-center font-sans text-[20px]">
                <span>{user.userType || "Student"}</span>
                <span>@{user.institute.nameAcronym || "VPPCOE"}</span>
                <button href="#" className="py-3 px-3 border rounded-full">
                  {user.firstName || "Rutvik"} {user.lastName || "Gondekar"}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
