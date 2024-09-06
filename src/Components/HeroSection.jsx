import React from "react";
// import Hero from "./src/assets/HeroImage.svg";

export default function HeroSection() {
  return (
    <div className='lg:flex md:flex-warp  items-center justify-center my-6 lg:mt-10 '>
      <div className=' w-[60%] mt-0 h-auto w-auto mx-7 '>
        <h1 className='font-serif text-[2.5rem] text-smoky-black font-medium tracking-wide flex flex-col'>
          <span className='text-palatinate-blue text-[3rem]'>AcademicHub.</span>
          A versatile Academic Management tool for Institutions.
        </h1>
        <div className='my-6 text-m text-sans w-[700px] text-gray'>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            iusto commodi doloremque adipisci optio ad voluptates quisquam
            ratione mollitia delectus? Nesciunt doloremque laudantium assumenda
            quasi dolore in sit porro quo!
          </p>
          <button
            href='#'
            className='px-5 py-2 rounded-lg text-white-smoke bg-palatinate-blue my-10 hover:rounded-full'
          >
            Enroll
          </button>
        </div>
      </div>

      <div className=' mx-8 h-[100vh] lg:w-[55%] md:w-[100%] my-0 justify-center'>
        <img
          className='h-[500px] w-[100%]'
          // src='https://www.vidyalayaschoolsoftware.com/webassets/images/school_software_3.png'
          src='./src/assets/HeroImage.svg'
          alt='Cannot load the Iamage'
        />
      </div>
    </div>
  );
}
