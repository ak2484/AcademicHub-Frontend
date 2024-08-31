import Navbar from "./LandingPageComponents/Navbar";
import HeroSection from "./LandingPageComponents/HeroSection";
import Footer from "./LandingPageComponents/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <div className=" flex justify-center mx-auto  px-20 bg-white-smoke">
        <HeroSection />
      </div>
      <Footer />
    </>
  );
}
