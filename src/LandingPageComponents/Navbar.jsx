import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileDrawOpen, setMobileDrawOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawOpen(!mobileDrawOpen);
  };

  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-white-smoke text-smoky-black flex'>
      <div className='container px-4 mx-auto relative text-sm'>
        <div className='flex justify-between item-center'>
          <div className='flex items-center flex-shrink-0'>
            <img
              className='h-12 w-auto mr-2 '
              src='./src/assets/AcademicHubLogo2.png'
              alt='logo'
            />
            <ul className='hidden lg:flex ml-14 space-x-12 flex justify-center '>
              <li className='space-x-12  tx-l font-sans text-[16px]'>
                <a href='' className='hover:text-palatinate-blue'>
                  Home
                </a>
                <a href='' className='hover:text-palatinate-blue '>
                  Products
                </a>
                <a href='' className='hover:text-palatinate-blue'>
                  Adout Us
                </a>
                <a href='' className='hover:text-palatinate-blue'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className=' hidden lg:flex justify-cneter space-x-4 items-center font-sans'>
            <button href='#' className='py-2 px-4 border rounded-lg'>
              Sign In
            </button>
            <button
              href='#'
              className='px-5 py-2 border rounded-lg bg-palatinate-blue text-white-smoke hover:rounded-full'
            >
              Enroll
            </button>
          </div>
          <div className='lg:hidden md:flex-col justifty-end'>
            <button onClick={toggleNavbar}>
              {mobileDrawOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawOpen && (
          <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden text-smoky-black'>
            <ul className='hidden lg:flex ml-14 space-x-12 flex justify-center '>
              <li className='space-x-12  tx-l font-sans'>
                <a href=''>Home</a>
                <a href=''>Products</a>
                <a href=''>Adout Us</a>
                <a href=''>Contact Us</a>
              </li>
            </ul>
            <div className='flex space-x-6 '>
              <button className='py-2 px-3 rounded-lg font-sans '>
                Sign In
              </button>
              <button className='py-2 px-3 rounded-lg bg-white-smoke font-sans '>
                Enroll
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
