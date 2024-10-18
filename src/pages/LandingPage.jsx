import React, { useState } from "react"; // Added useState import
import { Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate

const Footer = () => {
  return (
    <div className='max-w-full mx-auto py-16 px-[50px] grid lg:grid-cols-3 gap-8 text-white-smoke bg-smoky-black  font-sans '>
      <div>
        <div className='flex px-2'>
          <img
            className='h-10 w-auto'
            src='./src/assets/AcademicHubLogo1.png'
            alt='logo'
          />
          <h1 className='w-full text-3xl font-bold font-serif'>AcademicHub</h1>
        </div>
        <p className='px-[20px] py-4 font-sans'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          quaerat, modi voluptatem mollitia atque vero? Voluptatibus laboriosam
          nobis perspiciatis rerum voluptatum hic, temporibus, reiciendis esse
          sapiente ipsum quia! Consequuntur, provident.
        </p>
      </div>
      <div className='lg:col-span-3 flex justify-between text-white-smoke px-[20px]'>
        <div>
          <h6 className='font-medium text-white-smoke'>Solution</h6>
          <ul className='text-gray'>
            <li className='py-2 text-sm text-white-smoke'>Analytics</li>
            <li className='py-2 text-sm text-white-smoke'>Marketing</li>
            <li className='py-2 text-sm text-white-smoke'>Commerce</li>
            <li className='py-2 text-sm text-white-smoke'>Insights</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-white-smoke'>Support</h6>
          <ul className='text-gray'>
            <li className='py-2 text-sm text-white-smoke'>Pricing</li>
            <li className='py-2 text-sm text-white-smoke'>Documentation</li>
            <li className='py-2 text-sm text-white-smoke'>Guides</li>
            <li className='py-2 text-sm text-white-smoke'>Status</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-white-smoke'>Community</h6>
          <ul className='text-gray'>
            <li className='py-2 text-sm text-white-smoke'>Forums</li>
            <li className='py-2 text-sm text-white-smoke'>Events</li>
            <li className='py-2 text-sm text-white-smoke'>Newsletter</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-white-smoke'>Resources</h6>
          <ul className='text-gray'>
            <li className='py-2 text-sm text-white-smoke'>Blog</li>
            <li className='py-2 text-sm text-white-smoke'>FAQ</li>
            <li className='py-2 text-sm text-white-smoke'>Help Center</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className='lg:flex md:flex-warp items-center justify-center py-4 bg-white-smoke'>
      <div className='w-[60%] mt-0 h-auto mx-7'>
        <h1 className='font-serif text-[2.5rem] text-smoky-black font-medium tracking-wide flex flex-col'>
          <span className='text-palatinate-blue text-[3rem]'>AcademicHub.</span>
          A versatile Academic Management tool for Institutions.
        </h1>
        <div className='my-6 text-m text-sans w-[700px] text-gray'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            iusto commodi doloremque adipisci optio ad voluptates quisquam
            ratione mollitia delectus? Nesciunt doloremque laudantium assumenda
            quasi dolore in sit porro quo!
          </p>
          <button
            onClick={() => navigate("/enrollForm")} // Updated to use navigate
            className='px-5 py-2 rounded-lg text-white-smoke bg-palatinate-blue my-10 hover:rounded-full'
          >
            Enroll
          </button>
        </div>
      </div>

      <div className='mx-8 h-[100vh] lg:w-[55%] md:w-[100%] my-0 justify-center'>
        <img
          className='h-[500px] w-[100%]'
          src='./src/assets/HeroImage.svg'
          alt='Hero visual'
        />
      </div>
    </div>
  );
};

const Navbar = () => {
  const [mobileDrawOpen, setMobileDrawOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleNavbar = () => {
    setMobileDrawOpen(!mobileDrawOpen);
  };

  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-dark-imperial-blue bg-white-smoke text-smoky-black flex'>
      <div className='container px-4 mx-auto relative text-sm'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center flex-shrink-0'>
            <img
              className='h-12 w-auto mr-2'
              src='./src/assets/AcademicHubLogo2.png'
              alt='logo'
            />
            <ul className='hidden lg:flex ml-14 space-x-12 justify-center'>
              <li className='space-x-12 tx-l font-sans text-[16px]'>
                <a href='' className='hover:text-palatinate-blue '>
                  <NavLink>Home</NavLink>
                </a>
                <a href='' className='hover:text-palatinate-blue '>
                  <NavLink>Products</NavLink>
                </a>
                <a href='' className='hover:text-palatinate-blue '>
                  <NavLink>About Us</NavLink>
                </a>
                <a href='' className='hover:text-palatinate-blue '>
                  <NavLink>Contact Us</NavLink>
                </a>
              </li>
            </ul>
          </div>
          <div className='hidden lg:flex justify-center space-x-4 items-center font-sans'>
            <button
              onClick={() => {
                navigate("/loginForm");
              }}
              className='py-2 text-smoky-black px-3  border rounded-lg hover:rounded-full'
            >
              Login In
              {/* <NavLink to=''></NavLink> */}
            </button>
            <button
              onClick={() => navigate("/enrollForm")}
              className='px-5 py-2 border rounded-lg bg-palatinate-blue text-white-smoke hover:rounded-full'
            >
              Enroll
            </button>
          </div>
          <div className='lg:hidden md:flex-col justify-end'>
            <button onClick={toggleNavbar}>
              {mobileDrawOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawOpen && (
          <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden text-smoky-black'>
            <ul className='flex flex-col space-y-4'>
              <li>
                <a href='' className='text-white-smoke'>
                  Home
                </a>
              </li>
              <li>
                <a href='' className='text-white-smoke'>
                  Products
                </a>
              </li>
              <li>
                <a href='' className='text-white-smoke'>
                  About Us
                </a>
              </li>
              <li>
                <a href='' className='text-white-smoke'>
                  Contact Us
                </a>
              </li>
            </ul>
            <div className='flex space-x-6 mt-4'>
              <button
                onClick={() => navigate("/loginForm")}
                className='py-2 px-3 rounded-lg font-sans'
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/enrollForm")}
                className='py-2 px-3 rounded-lg bg-white-smoke font-sans'
              >
                Enroll
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Footer />
      {/* <StudentDashboard /> */}
    </div>
  );
}

{
  /* // Combine exports */
}
