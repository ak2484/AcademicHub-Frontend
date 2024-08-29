import React from "react";
// import Hero from "./src/assets/HeroImage.svg";

export default function HeroSection() {
  return (
    <div className='flex  items-center justify-center  h-auto w-auto my-6 lg:mt-10 '>
      <div className=' w-[800px] mt-0'>
        <h1 className='font-serif text-[50px] text-smoky-black font-medium tracking-wide'>
          <span className='text-palatinate-blue'>AcademicHub.</span> A versatile
          Academic Management tool for Institutions
        </h1>
        <div className='my-6 text-[18px] text-sans w-[800px] text-gray'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            iusto commodi doloremque adipisci optio ad voluptates quisquam
            ratione mollitia delectus? Nesciunt doloremque laudantium assumenda
            quasi dolore in sit porro quo!
          </p>
          <button
            href='#'
            className=' justify-center px-3 py-2 rounded-md text-white-smoke bg-palatinate-blue my-10 '
          >
            Enroll
          </button>
        </div>
      </div>

      <div className=' h-[600px] my-0 justify-center'>
        <img
          className='h-[500px] '
          src='https://www.vidyalayaschoolsoftware.com/webassets/images/school_software_3.png'
          alt='Cannot load the Iamage'
        />
      </div>
    </div>
  );
}
