import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu as Menu, FiX as X } from "react-icons/fi";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-dark-imperial-blue bg-white-smoke text-smoky-black flex">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-12 w-auto mr-2" src="./assets/AcademicHubLogo2.png" alt="logo" />
            {/* Desktop Navbar */}
            <ul className="hidden lg:flex ml-14 space-x-12 justify-center">
              <li className="text-lg font-sans space-x-6 flex">
                <NavLink to="/" className="hover:text-palatinate-blue">Home</NavLink>
                <NavLink to="/product" className="hover:text-palatinate-blue">Products</NavLink>
                <NavLink to="/about" className="hover:text-palatinate-blue">About Us</NavLink>
                <NavLink to="/contact" className="hover:text-palatinate-blue">Contact Us</NavLink>
              </li>
            </ul>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex space-x-4 items-center font-sans">
            <button onClick={() => navigate("/loginForm")} className="py-2 px-4 border rounded-lg hover:rounded-full transition-all duration-300">Login</button>
            <button onClick={() => navigate("/enrollForm")} className="px-5 py-2 border rounded-lg bg-palatinate-blue text-white-smoke hover:rounded-full transition-all duration-300">Enroll</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden relative">
            <button onClick={toggleNavbar} className="text-2xl">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md py-2">
                <NavLink to="/" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleNavbar}>Home</NavLink>
                <NavLink to="/product" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleNavbar}>Products</NavLink>
                <NavLink to="/about" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleNavbar}>About Us</NavLink>
                <NavLink to="/contact" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleNavbar}>Contact Us</NavLink>
                <div className="border-t border-gray-300 my-2"></div>
                <button onClick={() => { navigate("/loginForm"); toggleNavbar(); }} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Sign In</button>
                <button onClick={() => { navigate("/enrollForm"); toggleNavbar(); }} className="block w-full text-left px-4 py-2 bg-palatinate-blue text-white">Enroll</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
