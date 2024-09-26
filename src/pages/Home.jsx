import { useEffect } from "react";
import Booking from "../components/Booking";
import CTA from "../components/CTA";
import HomeHero from "../components/HomeHero";
import HowItWorks from "../components/HowItWorks";
import IndustryLeaders from "../components/IndustryLeaders";
import Professionals from "../components/Professionals";
import Quality from "../components/Quality";
import ServicesContainer from "../components/ServicesContainer";
import SubHero from "../components/SubHero";
import Testimonials from "../components/Testimonials";
import Video from "../components/Video";
import { useLocation } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "Home - " + window.location.hostname;
  }, []);

  const { hash } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page initially
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Scroll to the specific section if there's a hash
    if (hash) {
      const element = document.getElementById(hash.replace("#", "")); // Remove the hash for ID matching
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className="relative">
      <HomeHero />
      <Booking />
      <SubHero />
      <ServicesContainer />
      <IndustryLeaders />
      <Quality />
      <Professionals />
      <HowItWorks />
      <Video />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;
