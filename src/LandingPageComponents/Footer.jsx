// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-solid-svg-icons";
// import {
//   FaDribbleSquare,
//   FaFaceBookSquare,
//   FaGithubSquare,
//   FaInstagram,
//   FaTwitterSqaure,
// } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-full mx-auto py-16 px-[50px] grid lg:grid-cols-3 gap-8 text-white-smoke bg-smoky-black font-sans ">
      <div>
        <h1 className="w-full text-3xl font-bold  font-serif px-[20px]">
          AcademicHub
        </h1>
        <p className="px-[20px] py-4 font-snas">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          quaerat, modi voluptatem mollitia atque vero? Voluptatibus laboriosam
          nobis perspiciatis rerum voluptatum hic, temporibus, reiciendis esse
          sapiente ipsum quia! Consequuntur, provident.
        </p>
        <div className="flex justify-between md:w-[75%] my-6 ">
          {/* <FontAwesomeIcon icon={faGithub} /> */}
        </div>
      </div>
      <div className="lg:col-span-3 flex justify-between text-white-smoke px-[20px]">
        <div>
          <h6 className="font-medium text-white-smoke ">Solution</h6>
          <ul>
            <li className="py-2 text-sm text-white-smoke">Analytics</li>
            <li className="py-2 text-sm text-white-smoke">Marketing</li>
            <li className="py-2 text-sm text-white-smoke">Commerce</li>
            <li className="py-2 text-sm text-white-smoke">Insights</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-white-smoke ">Support</h6>
          <ul>
            <li className="py-2 text-sm text-white-smoke">Pricing</li>
            <li className="py-2 text-sm text-white-smoke">Documentation</li>
            <li className="py-2 text-sm text-white-smoke">Guides</li>
            <li className="py-2 text-sm text-white-smoke">Status</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-white-smoke ">Support</h6>
          <ul>
            <li className="py-2 text-sm text-white-smoke">Pricing</li>
            <li className="py-2 text-sm text-white-smoke">Documentation</li>
            <li className="py-2 text-sm text-white-smoke">Guides</li>
            <li className="py-2 text-sm text-white-smoke">Status</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-white-smoke ">Solution</h6>
          <ul>
            <li className="py-2 text-sm text-white-smoke">Analytics</li>
            <li className="py-2 text-sm text-white-smoke">Marketing</li>
            <li className="py-2 text-sm text-white-smoke">Commerce</li>
            <li className="py-2 text-sm text-white-smoke">Insights</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
