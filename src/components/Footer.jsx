import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-smoky-black text-white-smoke py-10 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <img
              className="h-10 w-auto"
              src="./src/assets/AcademicHubLogo1.png"
              alt="logo"
            />
            <h1 className="text-3xl font-bold font-serif">AcademicHub</h1>
          </div>
          <p className="py-4 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            quaerat, modi voluptatem mollitia atque vero?
          </p>
        </div>

        {/* Solutions Section */}
        <div className="text-center md:text-left">
          <h6 className="font-semibold text-lg mb-2">Solutions</h6>
          <ul className="space-y-2">
            <li className="text-sm hover:text-powder-blue transition duration-300">Analytics</li>
            <li className="text-sm hover:text-powder-blue transition duration-300">Marketing</li>
            <li className="text-sm hover:text-powder-blue transition duration-300">Commerce</li>
            <li className="text-sm hover:text-powder-blue transition duration-300">Insights</li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="text-center md:text-left">
          <h6 className="font-semibold text-lg mb-2">Support</h6>
          <ul className="space-y-2">
            <li className="text-sm hover:text-powder-blue transition duration-300">Pricing</li>
            <li className="text-sm hover:text-powder-blue transition duration-300">Documentation</li>
            <li className="text-sm hover:text-powder-blue transition duration-300">Guides</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} AcademicHub. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
