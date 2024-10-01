// components/NonTeachingStaffDashboard.js
export default function NonTeachingStaffDashboard() {
    return (
      <div className='flex-col bg-white-smoke'>
        <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-white-smoke text-smoky-black flex'>
          <div className='container px-4 mx-auto relative text-sm'>
            <div className='flex justify-between item-center'>
              <div className='flex items-center flex-shrink-0'>
                <img
                  className='h-12 w-auto mr-2'
                  src='./src/assets/AcademicHubLogo2.png'
                  alt='logo'
                />
              </div>
              <div className='hidden lg:flex justify-center space-x-4 items-center font-sans text-[20px]'>
                <span>Non-Teaching Staff</span>
                <button href='#' className='py-3 px-3 border rounded-full'>
                  Staff Name
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div className='text-sans text-[22px] text-palatinate-blue'>
          <div className=''>
            <div className='sticky top-0 h-screen w-64 p-6 shadow-lg bg-lavender-web'>
              <h2 className='space-y-4 font-bold'>Non-Teaching Staff Dashboard</h2>
              <ul className='px-3'>
                <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded'>
                  Manage Records
                </li>
                <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded'>
                  Reports
                </li>
                <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded'>
                  Communication
                </li>
                <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded'>
                  Event Management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  