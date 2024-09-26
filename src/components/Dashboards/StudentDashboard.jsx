import { Link, NavLink } from "react-router-dom";

export default function StudentDashboard() {
  return (
    <div className='flex-col bg-white-smoke'>
      <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-white-smoke text-smoky-black flex'>
        <div className='container px-4 mx-auto relative text-sm'>
          <div className='flex justify-between item-center'>
            <div className='flex items-center flex-shrink-0'>
              <img
                className='h-12 w-auto mr-2 '
                src='./src/assets/AcademicHubLogo2.png'
                alt='logo'
              />
            </div>
            <div className=' hidden lg:flex justify-cneter space-x-4 items-center font-sans text-[20px]'>
              <span>Student</span>
              <span>@VPPCOE</span>
              <button href='#' className='py-3 px-3 border rounded-full'>
                Rutvik Gondekar
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className='text-sans text-[22px] text-palatinate-blue '>
        <div className=''>
          {/* <h2 className='font-bold bg-jordy-blue text-dark-imperial-blue px-6 py-3 sticky top-0 w-64 shadow-full'>
              Dashboard
            </h2> */}
          <div className='sticky top-0 h-screen w-64 p-6 shadow-lg bg-lavender-web'>
            <h2 className='space-y-4 font-bold'>My Desk</h2>
            <ul className='px-3'>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded'>
                Dashboard
              </li>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded'>
                Schedule
              </li>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded'>
                Attendance
              </li>
            </ul>
            <h2 className='space-y-6 font-bold'>Academics</h2>
            <ul className='px-3'>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded space-x-6 '>
                Courses
              </li>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded'>
                <Link to='/'>Hoome</Link>
              </li>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded'>
                <Link to='/labs'>Labs</Link>
              </li>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded'>
                Assignments
              </li>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded'>
                Experiments
              </li>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 powder-blue'>
                Exams
              </li>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded'>
                Resources
              </li>
            </ul>

            <h2 className='space-y-6 font-bold py-'>Institute</h2>
            <ul className='px-3'>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded space-x-6'>
                Announcements
              </li>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded'>
                Calendar
              </li>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded'>
                Enquiry
              </li>
              <li className='cursor-pointer hover:text-powder-blue p-0.5 rounded'>
                College site
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
