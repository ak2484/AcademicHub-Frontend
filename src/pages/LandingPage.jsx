import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import Home from "./Home";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product" element={<Product />} />
        <Route path="home" element={<Home />} />
      </Routes>
      <HeroSection />
      <Footer />
    </div>
  );
};

export default LandingPage;