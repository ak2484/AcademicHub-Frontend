import React from "react";
import Navbar from "./Components/navBar";
import HeroSection from "./Components/HeroSection";
import Footer from "./Components/Footer";
import Dashboard from "./Components/Dashboard";

export default function App() {
  return (
    <>
      <Navbar />
      <div className=' flex justify-center mx-auto  px-20 bg-white-smoke'>
        <HeroSection />
      </div>
      <Footer />
      <div className='flex-col'>
        <Dashboard />
      </div>
    </>
  );
}
