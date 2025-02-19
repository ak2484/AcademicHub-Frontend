import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center py-10 bg-white-smoke px-6 md:px-12">
      {/* Text Section */}
      <div className="w-full lg:w-[50%] text-center lg:text-left mt-6 lg:mt-0">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-smoky-black font-medium tracking-wide leading-tight">
          <span className="text-palatinate-blue text-4xl md:text-5xl lg:text-6xl">AcademicHub.</span>
          <br />
          A versatile Academic Management tool for Institutions.
        </h1>
        <p className="mt-6 text-base md:text-lg text-gray max-w-lg mx-auto lg:mx-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          iusto commodi doloremque adipisci optio ad voluptates quisquam
          ratione mollitia delectus?
        </p>
        <button
          onClick={() => navigate("/enrollForm")}
          className="mt-8 px-6 py-3 rounded-lg text-white bg-palatinate-blue hover:bg-dark-blue transition duration-300"
        >
          Enroll
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-[50%] flex justify-center">
        <img
          className="w-full max-w-lg h-auto"
          src="./src/assets/HeroImage.svg"
          alt="Hero visual"
        />
      </div>
    </div>
  );
};

export default HeroSection;
